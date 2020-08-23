using InternetShowcase.Data;
using InternetShowcase.Data.interfaces;
using InternetShowcase.Data.Models;
using InternetShowcase.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InternetShowcase.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        private readonly IAllProducts _allProducts;
        private readonly IProductsCategory _allCategories;
        private readonly ShowcaseDbContent data;

        public ProductsController(ShowcaseDbContent content, IAllProducts iAllProducts, IProductsCategory iProductsCat)
        {
            _allCategories = iProductsCat;
            _allProducts = iAllProducts;
            data = content;

            //if (!data.Products.Any())
            //{
            //    data.Categories.AddRange(
            //        new Category { categoryName = "цветы" },
            //        new Category { categoryName = "шары" },
            //        new Category { categoryName = "удобрение" },
            //        new Category { categoryName = "букеты" },
            //        new Category { categoryName = "горшки" }
            //    );
            //    data.SaveChanges();
            //    var rnd = new Random();
            //    for (int i = 1; i <= 40; i++)
            //    {
            //        data.Products.Add(
            //            new Product 
            //            { 
            //                name = "Цветок №" + i,
            //                categoryID = rnd.Next(1, 6),
            //                price = rnd.Next(3, 15),
            //                oldPrice = rnd.Next(15, 35),
            //                description = "Что то про этот цветок",
            //                imageUrl = $"assets/img/products/product-{rnd.Next(1,5)}.jpg",
            //                available = true,
            //                isFavourite = true
            //            });
            //    }
            //    data.SaveChanges();
            //}
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> Get()
        {
            ProductListViewModel obj = new ProductListViewModel();
            obj.allProducts = _allProducts.Products;
            obj.currCategory = "Цветы";
            return await data.Products.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> Get(int id)
        {
            Product product = await data.Products.FirstOrDefaultAsync(p => p.id == id);

            if (product != null)
            {
                return product;
            }
            return NotFound();
        }
     
        [HttpPost]
        public async Task<ActionResult> Post(Product product)
        {
            if (ModelState.IsValid)
            {
                data.Products.Add(product);
                await data.SaveChangesAsync();
                return Ok(product);
            }
            return BadRequest(ModelState);
        }
    }
}
