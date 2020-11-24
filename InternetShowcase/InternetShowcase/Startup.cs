using InternetShowcase.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using System;
using System.IO;
using InternetShowcase.Infrastructure;

namespace InternetShowcase
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
        public IConfiguration Configuration { get; }
       
        public void ConfigureServices(IServiceCollection services)
        {
            services
                .AddMappingTransients()
                .AddDbContext<ShowcaseDbContext>(options => options
                   .UseMySql(Configuration.GetConnectionString("DefaultConnection"), new MySqlServerVersion(new Version(8, 0, 11))))
                .AddIdentity()
                .AddConfigure()
                .AddMyCors(MyAllowSpecificOrigins)
                .AddJwtAuthentication(services.GetApplicationSettings(Configuration))
                .AddControllers()
                .AddNewtonsoftJson(options =>
                     options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);
        }

       
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            
            app.UseRouting()
               .UseCors(MyAllowSpecificOrigins)
               .UseStaticFiles(new StaticFileOptions {
                   FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"Resources")),
                   RequestPath = new PathString("/Resources")
               })
               .UseAuthentication()
               .UseAuthorization()
               .UseEndpoints(endpoints =>
               {
                   endpoints.MapControllers();
               });

            using(var scope = app.ApplicationServices.CreateScope())
            {
                ShowcaseDbContext content = scope.ServiceProvider.GetRequiredService<ShowcaseDbContext>();
                DBObjects.initial(content);
            }
            
        }
    }
}
