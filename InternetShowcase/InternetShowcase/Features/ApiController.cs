using InternetShowcase.Data.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace InternetShowcase.Features
{
    [ApiController]
    [Route("api/[controller]")]
    public abstract class ApiController : ControllerBase
    {
        public IPasswordValidator<User> GetPasswordValidator()
            => HttpContext
                  .RequestServices
                  .GetService(typeof(IPasswordValidator<User>))
                  as IPasswordValidator<User>;
        public IPasswordHasher<User> GetPasswordHash()
            => HttpContext
                  .RequestServices
                  .GetService(typeof(IPasswordHasher<User>))
                  as IPasswordHasher<User>;


    }
}
