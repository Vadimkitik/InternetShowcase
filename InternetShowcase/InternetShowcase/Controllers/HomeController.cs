using Microsoft.AspNetCore.Mvc;

namespace InternetShowcase.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HomeController : ControllerBase
    {
        public IActionResult Get()
        {
            return Ok("Works!!!");
        }
    }
}
