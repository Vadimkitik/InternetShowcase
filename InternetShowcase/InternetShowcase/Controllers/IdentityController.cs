using InternetShowcase.Data.Models.Identity;
using InternetShowcase.Models.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;

namespace InternetShowcase.Controllers
{
    public class IdentityController : ApiController
    {
        private readonly UserManager<User> userManager;
        private readonly AppSettings appSettings;

        protected IdentityController(
            UserManager<User> userManager,
            IOptions<AppSettings> appSettings)
        {
            this.userManager = userManager;
            this.appSettings = appSettings.Value;
        }

        public async Task<IActionResult> Register(RegisterRequestModel model)
        {
            var user = new User
            {
                Email = model.Email,
                UserName = model.Name
            };
            var result = await this.userManager.CreateAsync(user, model.Password);

            if(result.Succeeded)
            {
                return Ok();
            }
            return BadRequest(result.Errors);
        }

        public async Task<ActionResult<string>> Login(LoginRequestModel model)
        {
            var user = await this.userManager.FindByEmailAsync(model.Email);

            if(user == null )
            {
                return Unauthorized();
            }

            var passwordValid = await this.userManager.CheckPasswordAsync(user, model.Password);
            if(!passwordValid)
            {
                return Unauthorized();
            }


            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(this.appSettings.Secret);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Id.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            var encryptedToken = tokenHandler.WriteToken(token);

            return encryptedToken;
            // attach user to context on successful jwt validation
            //context.Items["User"] = userService.GetById(userId);

            ///////////////////
            /*
            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("superSecretKey@345#@!%>?#@!"));
            var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
            var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, user.Email),
                    new Claim(ClaimTypes.Role, user.Role)
                };

            var tokeOptions = new JwtSecurityToken(
            issuer: "http://localhost:5000",
            audience: "http://localhost:5000",
            claims: claims,
            expires: DateTime.Now.AddMinutes(5),
            signingCredentials: signinCredentials
            );

            var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
            return Ok(new { Token = tokenString, user.Name, user.Role, user.Email });
            */
        }
    }
}
