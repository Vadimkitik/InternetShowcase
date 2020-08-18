using InternetShowcase.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace InternetShowcase.Controllers
{
    public class ProductsController : Controller
    {
        [HttpPost]
        public async Task<ActionResult<int>> Create(CreateProductRequestModel model)
        {

        }
    }
}
