using InternetShowcase.Data.Models.Identity;
using InternetShowcase.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using AutoMapper;
using InternetShowcase.Data.interfaces;
using InternetShowcase.Data.Models;
using InternetShowcase.ViewModels.MappingProfile;
using InternetShowcase.Data.Repository;
using Microsoft.AspNetCore.Http.Features;

namespace InternetShowcase.Infrastructure
{
    public static class ServiceCollectionExtensions
    {
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
        {
            services.AddAutoMapper(typeof(MappingProfile));
            services.AddTransient<IAllProducts, ProductReposytory>();
            services.AddTransient<IRepository<Category>, CategoryRepository>();
            services.AddTransient<IRepository<UserOld>, UserRepository>();

            return services;
        }

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
