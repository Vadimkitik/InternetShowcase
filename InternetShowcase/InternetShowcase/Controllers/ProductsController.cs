using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using InternetShowcase.Data.interfaces;
using InternetShowcase.Data.Models;
using InternetShowcase.ViewModels;

namespace InternetShowcase.Controllers
{
    public class ProductsController : ApiController
    {
        private readonly IAllProducts _allProducts;
        private readonly IMapper _mapper;

        public ProductsController(IAllProducts iAllProducts, IMapper mapper)
        {
            _allProducts = iAllProducts;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<IndexProductView>>> GetProducts()
        {
            var products = await _allProducts.GetAll();

            if (products == null)
            {
                return BadRequest();
            }
            return _mapper.Map<List<Product>, List<IndexProductView>>((List<Product>)products);
        }

        [HttpGet("{productLine}")]
        public async Task<ActionResult<ProductView>> GetProduct(string productLine)
        {
            var product = await _allProducts.GetByLine(productLine);
            if (product != null)
            {
                return _mapper.Map<Product, ProductView>(product);
            }
            return NotFound();
        }
     
        [HttpPost]
        public async Task<ActionResult<ProductView>> Post(Product product)
        {
            if (ModelState.IsValid)
            {
                _mapper.Map<Product, ProductView>(await _allProducts.Create(product));
                return Ok(product);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public async Task<bool> Post(int id)
        {
            return await _allProducts.Delete(id);
        }

        [HttpPut]
        public async Task<bool> Edit(Product product)
        {
            return await _allProducts.Update(product);
        }
    }
}
