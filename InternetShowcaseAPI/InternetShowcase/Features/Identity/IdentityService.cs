﻿using InternetShowcase.Data.Models;
using InternetShowcase.Infrastructure.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace InternetShowcase.Features.Identity
{
    public class IdentityService : IIdentityService
    {
        private readonly UserManager<User> userManager;
        private readonly IEmailService emailService;

        public IdentityService(
            UserManager<User> userManager,
            IEmailService emailService)
        {
            this.userManager = userManager;
            this.emailService = emailService;
        }

        public async Task<Result> ConfirmEmail(string userId, string code)
        {
            if (userId == null || code == null)
            {
                return "User id or code is null";
            }
            var user = await userManager.FindByIdAsync(userId);
            if (user == null)
            {
                return "User not founded";
            }
            var result = await userManager.ConfirmEmailAsync(user, code);
            if (result.Succeeded)
            {
                return true;
            }
            return "token is inValid";
        }

        public async Task<Result> ConfirmForgotPasswordEmail(string email, string callbackUrl)
        {
            var result = await emailService.SendEmailAsync(email, "Reset Password",
                    $"<h2>Вас приветствует Alleutina Shop.</h2><p>Для сброса пароля пройдите по ссылке: <a href='{callbackUrl}'>{callbackUrl}</a></p>");
            if (result.Failure)
            {
                return result.Error;
            }
            return true;
        }

        public async Task<Result> ConfirmRegisterEmail(string email, string callbackUrl)
        {
            var result = await emailService.SendEmailAsync(email, "Confirm your account",
                    $"<h2>Вас приветствует Alleutina Shop.</h2><p>Подтвердите регистрацию, перейдя по ссылке: <a href='{callbackUrl}'>{callbackUrl}</a></p>");
            if (result.Failure)
            {
                return result.Error;
            }
            return true;
        }

        public string GenerateJwtToken(string userId, string userName, IList<string> userRoles, string secret)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(secret);
            
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.NameIdentifier, userId),
                    new Claim(ClaimTypes.Name, userName)
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            foreach(var role in userRoles)
            {
                tokenDescriptor.Subject.AddClaim(new Claim(ClaimTypes.Role, role));
            }

            var token = tokenHandler.CreateToken(tokenDescriptor);
            var encryptedToken = tokenHandler.WriteToken(token);

            return encryptedToken;
        }

        public async Task<Result> ResetPasswordAsync(string email, string newPassword, string code)
        {
            var user = await userManager.FindByEmailAsync(email);
            if (user == null)
            {
                return "User not Founded";
            }
            var result = await userManager.ResetPasswordAsync(user, code, newPassword);
            if (result.Succeeded)
            {
                return true;
            }
            return "inValid Token";
        }
    }
}
