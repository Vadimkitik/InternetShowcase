using AutoMapper;
using InternetShowcase.Data.interfaces;
using InternetShowcase.Data.Models;
using InternetShowcase.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using System.Collections.Generic;
using System.Linq;

namespace InternetShowcase.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        private readonly IAllProducts _allProducts;
        private readonly IMapper _mapper;

        public ProductsController(IAllProducts iAllProducts, IMapper mapper)
        {
            _allProducts = iAllProducts;
            _mapper = mapper;
        }

        [HttpGet]
        public ActionResult<IEnumerable<ProductView>> Get()
        {
            var products = _allProducts.Products.ToList();
            var productsView = _mapper.Map<List<Product>, List<ProductView>>(products);
            if (productsView == null)
            {
                return BadRequest();
            }
            return productsView;
        }

        [HttpGet("{productLine}")]
        public ActionResult<ProductView> Get(string productLine)
        {
            var product = _mapper.Map<Product, ProductView>(_allProducts.GetByLine(productLine));
            if (product != null)
            {
                return product;
            }
            return NotFound();
        }
     
        [HttpPost]
        public ActionResult<ProductView> Post(Product product)
        {
            if (ModelState.IsValid)
            {
                _mapper.Map<Product, ProductView>(_allProducts.Create(product));
                return Ok(product);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public bool Post(int id)
        {
            return _allProducts.Delete(id);
        }

        [HttpPut]
        public bool Edit(Product product)
        {
            return _allProducts.Update(product);
        }



    }
}
