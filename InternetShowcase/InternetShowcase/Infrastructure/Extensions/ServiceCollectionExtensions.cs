﻿using AutoMapper;
using InternetShowcase.Data;
using InternetShowcase.Data.Features.Categories;
using InternetShowcase.Features;
using InternetShowcase.Data.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using InternetShowcase.Features.Products;
using Microsoft.Extensions.Configuration;
using Microsoft.EntityFrameworkCore;
using System;
using InternetShowcase.Features.Identity;
using InternetShowcase.Features.Users;
using InternetShowcase.Features.Roles;
using InternetShowcase.Infrastructure.Services;
using InternetShowcase.Infrastructure.MappingProfiles;

namespace InternetShowcase.Infrastructure.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static AppSettings GetApplicationSettings(
            this IServiceCollection services,
            IConfiguration configuration)
        {
            var applicationSettingsConfiguration = configuration.GetSection("ApplicationSettings");
            services.Configure<AppSettings>(applicationSettingsConfiguration);

            return applicationSettingsConfiguration.Get<AppSettings>();
        }

        public static IServiceCollection AddDatabase(
            this IServiceCollection services, 
            IConfiguration configuration)
            => services
                 .AddDbContext<ShowcaseDbContext>(options => options
                     .UseMySql(configuration.GetDefaultConnectionString(), new MySqlServerVersion(new Version(8, 0, 11))));

        public static IServiceCollection AddIdentity(this IServiceCollection services)
        {
            services
                .AddIdentity<User, IdentityRole>(options =>
                {
                    options.Password.RequiredLength = 5;
                    options.Password.RequireDigit = false;
                    options.Password.RequireLowercase = false;
                    options.Password.RequireUppercase = false;
                    options.Password.RequireNonAlphanumeric = false;
                    options.User.RequireUniqueEmail = true;
                })
                .AddEntityFrameworkStores<ShowcaseDbContext>();
            return services;
        }

        public static IServiceCollection AddJwtAuthentication(
            this IServiceCollection services, 
            AppSettings appSettings)
        {
            var key = Encoding.ASCII.GetBytes(appSettings.Secret);

            services
                    .AddAuthentication(opt =>
                    {
                        opt.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                        opt.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                    })
                    .AddJwtBearer(options =>
                    {
                        options.RequireHttpsMetadata = true;
                        options.SaveToken = true;
                        options.TokenValidationParameters = new TokenValidationParameters
                        {
                            ValidateIssuerSigningKey = true,
                            IssuerSigningKey = new SymmetricSecurityKey(key),
                            ValidateIssuer = false,
                            ValidateAudience = false
                        };
                    });

            return services;
        }

        public static IServiceCollection AddMappingTransients(this IServiceCollection services)
            => services
                .AddAutoMapper(typeof(MappingProfile))
                .AddTransient<IAllProducts, ProductReposytory>()
                .AddTransient<IRepository<Category>, CategoryRepository>()
                .AddTransient<IIdentityService, IdentityService>()
                .AddScoped<ICurrentUserService, CurrentUserService>()
                .AddTransient<IUsersService, UsersService>().AddTransient<IRolesService, RolesService>();  

        public static IServiceCollection AddConfigure(this IServiceCollection services)
        {
            services.Configure<FormOptions>(o =>
            {
                o.ValueLengthLimit = int.MaxValue;
                o.MultipartBodyLengthLimit = int.MaxValue;
                o.MemoryBufferThreshold = int.MaxValue;
            });
            return services;
        }

        public static IServiceCollection AddMyCors(this IServiceCollection services, string MyAllowSpecificOrigins)
        {
            services.AddCors(options =>
            {
                options.AddPolicy(MyAllowSpecificOrigins, builder =>
                {
                    builder.WithOrigins("http://localhost:4200")
                           .AllowAnyHeader()
                           .AllowAnyMethod()
                           .AllowCredentials();
                });
            });
            return services;
        }
    }

    
}