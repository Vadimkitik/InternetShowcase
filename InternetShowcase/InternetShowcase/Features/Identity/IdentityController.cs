using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using InternetShowcase.Data.Models;
using InternetShowcase.Features.Identity.Models;
using InternetShowcase.Infrastructure.Services;
using Microsoft.AspNetCore.Authorization;
using System.Collections.Generic;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;

namespace InternetShowcase.Features.Identity
{
    public class IdentityController : ApiController
    {
        private readonly UserManager<User> userManager;
        private readonly AppSettings appSettings;
        private readonly IIdentityService identityService;

        public IdentityController(
            UserManager<User> userManager,
            IOptions<AppSettings> appSettings,
            IIdentityService identityService,
            IEmailService emailService, 
            RoleManager<IdentityRole> roleManager)
        {
            this.userManager = userManager;
            this.appSettings = appSettings.Value;
            this.identityService = identityService;
        }

        [Route(nameof(Login))]
        public async Task<ActionResult<object>> Login(LoginRequestModel model)
        {
            var user = await this.userManager.FindByEmailAsync(model.Email);

            if (user == null)
            {
                return Unauthorized("Login or password is not correct");
            }
            
            var passwordValid = await this.userManager.CheckPasswordAsync(user, model.Password);
            if (!passwordValid)
            {
                return Unauthorized("Login or password is not correct");
            }
            
            var confirmEmail = await userManager.IsEmailConfirmedAsync(user);
            if(!confirmEmail)
            {
                return Unauthorized("Confirm your Email by clicking on the link, check your mail");
            }
            var userRoles = await userManager.GetRolesAsync(user);
            var token = this.identityService.GenerateJwtToken(
                user.Id,
                user.UserName,
                userRoles,
                this.appSettings.Secret);

            var loginResponse = new LoginResponseModel
            {
                Token = token,
                UserName = user.UserName,
                Email = user.Email,
                UserRoles = userRoles
            };

            return loginResponse;
        }

        [Route(nameof(Register))]
        public async Task<ActionResult> Register(RegisterRequestModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState.Values);
            }
            var user = new User
            {
                Email = model.Email,
                UserName = model.UserName
            };
            var result = await userManager.CreateAsync(user, model.Password);
            if(result.Succeeded)
            {
                await userManager.AddToRoleAsync(user, "user");
                var code = await userManager.GenerateEmailConfirmationTokenAsync(user);
                var callbackUrl = Url.Action(
                                   "ConfirmEmail",
                                   "Identity",
                                   new { userId = user.Id, code = code },
                                   Request.Scheme);
                var resultSendEmail = await identityService.ConfirmRegisterEmail(model.Email, callbackUrl);
                if (resultSendEmail.Failure)
                {
                    return BadRequest(resultSendEmail.Error);
                }
                return Ok(resultSendEmail.Succeeded);
            }
            return BadRequest(result.Errors);
        }

        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> ConfirmEmail(string userId, string code)
        {
            var result = await identityService.ConfirmEmail(userId, code);
            if (result.Failure)
            {
                return BadRequest(result.Error);
            }                
            return Ok(result.Succeeded);
        }

        [HttpPost]
        [AllowAnonymous]
        [Route(nameof(ForgotPassword))]
        public async Task<ActionResult<object>> ForgotPassword(ForgotPasswordRequestModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(model);
            }            
            var user = await userManager.FindByEmailAsync(model.Email);
            if (user == null || !(await userManager.IsEmailConfirmedAsync(user)))
            {
                return BadRequest("Пользователь с таким Email не найден или Email не подтвержден");
            }
            var code = await userManager.GeneratePasswordResetTokenAsync(user);
            var callbackUrl = Url.Action(
                                "ResetPassword",
                                "Identity",
                                new { userId = user.Id, code = code },
                                Request.Scheme);
            var resultSendEmail = await identityService.ConfirmForgotPasswordEmail(model.Email, callbackUrl);
            if (resultSendEmail.Failure)
            {
                return BadRequest(resultSendEmail.Error);
            }
            return Ok(new { Token = code });
        }

        [HttpPost]
        [AllowAnonymous]
        [Route(nameof(ResetPassword))]
        public async Task<IActionResult> ResetPassword(ResetPasswordRequestModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(model);
            }
            var result = await identityService.ResetPasswordAsync(model.Email, model.Password, model.Code);
            if (result.Failure)
            {
                return BadRequest(result.Error);                
            }
            return Ok(result.Succeeded);
        }
    }
}
