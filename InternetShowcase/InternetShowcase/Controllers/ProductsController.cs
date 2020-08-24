using AutoMapper;
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
        private readonly IMapper _mapper;

        public ProductsController(ShowcaseDbContent content, IAllProducts iAllProducts, IProductsCategory iProductsCat, IMapper mapper)
        {
            _allCategories = iProductsCat;
            _allProducts = iAllProducts;
            _mapper = mapper;
            data = content;
        }

        [HttpGet]
        public IEnumerable<ProductView> Get()
        {
            var products = _allProducts.Products.ToList();
            return _mapper.Map<List<Product>, List<ProductView>>(products);
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
