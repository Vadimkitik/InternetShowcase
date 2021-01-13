using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using InternetShowcase.Data.Models;
using Microsoft.AspNetCore.Authorization;
using InternetShowcase.Features.Products.Models;

namespace InternetShowcase.Features.Products
{
    public class ProductsController : ApiController
    {
        private readonly IProductsService _allProducts;
        private readonly IMapper _mapper;

        public ProductsController(IProductsService iAllProducts, IMapper mapper)
        {
            _allProducts = iAllProducts;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProductListingModel>>> GetProducts()
        {
            var products = await _allProducts.GetAll();

            if (products == null)
            {
                return BadRequest();
            }
            return _mapper.Map<List<Product>, List<ProductListingModel>>((List<Product>)products);
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
        [Authorize(Roles = "admin, manager")]
        public async Task<ActionResult<ProductView>> CreateProduct(Product product)
        {
            if (ModelState.IsValid)
            {
                _mapper.Map<Product, ProductView>(await _allProducts.Create(product));
                return Ok(product);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "admin, manager")]
        public async Task<bool> DeleteProduct(int id)
        {
            return await _allProducts.Delete(id);
        }

        [HttpPut]
        [Authorize(Roles = "admin, manager")]
        public async Task<bool> EditProduct(UpdateProductRequestModel productModel)
        {
            return await _allProducts.Update(productModel);
        }
    }
}
