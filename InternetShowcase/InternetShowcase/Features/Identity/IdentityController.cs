using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using InternetShowcase.Data.Models;
using InternetShowcase.Features.Identity.Models;
using InternetShowcase.Infrastructure.Services;
using Microsoft.AspNetCore.Authorization;

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
                return Unauthorized();
            }
            
            var passwordValid = await this.userManager.CheckPasswordAsync(user, model.Password);
            if (!passwordValid)
            {
                return Unauthorized();
            }

            var confirmEmail = await userManager.IsEmailConfirmedAsync(user);
            if(!confirmEmail)
            {
                return Unauthorized("Подтвердите ваш Email перейдя по ссылке, проверьте почту");
            }

            var token = this.identityService.GenerateJwtToken(
                user.Id,
                user.UserName,
                this.appSettings.Secret);

            var loginResponse = new LoginResponseModel
            {
                Token = token,
                UserName = user.UserName,
                Email = user.Email,
                UserRoles = await userManager.GetRolesAsync(user)
            };

            return loginResponse;
        }

        [Route(nameof(Register))]
        public async Task<ActionResult> Register(RegisterRequestModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(model);
            }
            var user = new User
            {
                Email = model.Email,
                UserName = model.UserName
            };
            var result = await userManager.CreateAsync(user, model.Password);
            if(result.Succeeded)
            {
                var code = await userManager.GenerateEmailConfirmationTokenAsync(user);
                var callbackUrl = Url
                                   .Action(
                                   "ConfirmEmail",
                                   "Identity",
                                   new { userId = user.Id, code = code },
                                   Request.Scheme);
                var sendEmail = await identityService.ConfirmRegisterEmail(model.Email, callbackUrl);

                return Content(sendEmail);
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
        public async Task<IActionResult> ForgotPassword(ForgotPasswordRequestModel model)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(model);
            }            
            var user = await userManager.FindByEmailAsync(model.Email);
            if (user == null || !(await userManager.IsEmailConfirmedAsync(user)))
            {
                return Content("Для завершения сброса пароля проверьте электронную почту и перейдите по ссылке, указанной в письме");
            }
            var code = await userManager.GeneratePasswordResetTokenAsync(user);
            var callbackUrl = Url
                                .Action(
                                "ResetPassword",
                                "Identity",
                                new { userId = user.Id, code = code },
                                Request.Scheme);
            var sendEmail = await identityService.ConfirmForgotPasswordEmail(model.Email, callbackUrl);

            return Content(sendEmail);
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
