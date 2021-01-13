using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using InternetShowcase.Infrastructure.Extensions;

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
                .AddDatabase(this.Configuration)
                .AddIdentity()
                .AddConfigure()
                .AddMyCors(MyAllowSpecificOrigins)
                .AddJwtAuthentication(services.GetApplicationSettings(this.Configuration))
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
               .UseAppStaticFiles()
               .UseDefaultFiles()
               .UseStaticFiles()
               .UseAuthentication()
               .UseAuthorization()
               .UseEndpoints(endpoints =>
               {
                   endpoints.MapControllers();
               });
        }
    }
}
