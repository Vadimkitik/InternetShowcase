﻿using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System;
using System.Text;
using System.Linq;
using InternetShowcase.Data;
using InternetShowcase.Data.Models;

namespace InternetShowcase.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private ShowcaseDbContent db;
        public AuthController(ShowcaseDbContent context)
        {
            db = context;
        }

        [HttpPost, Route("login")]
        public IActionResult Login([FromBody]LoginModel checkUser)
        {
            User user = db.Users.FirstOrDefault(u => u.Email == checkUser.Email && u.Password == checkUser.Password);
            if (user == null || string.Equals(user.Role, "Admin"))
            {
                return BadRequest("Invalid client request");
            }

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
        }
    }
}
