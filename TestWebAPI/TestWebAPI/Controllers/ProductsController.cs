using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TestWebAPI.Data.interfaces;
using TestWebAPI.Data.Models;
using TestWebAPI.ViewModels;

namespace TestWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
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
