﻿using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using InternetShowcase.Data.Models;
using Microsoft.AspNetCore.Authorization;

namespace InternetShowcase.Features.Products
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
        public async Task<ActionResult<IEnumerable<ProductListView>>> GetProducts()
        {
            var products = await _allProducts.GetAll();

            if (products == null)
            {
                return BadRequest();
            }
            return _mapper.Map<List<Product>, List<ProductListView>>((List<Product>)products);
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

        [Authorize]
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

        [Authorize]
        [HttpDelete("{id}")]
        public async Task<bool> Post(int id)
        {
            return await _allProducts.Delete(id);
        }

        [Authorize]
        [HttpPut]
        public async Task<bool> Edit(Product product)
        {
            return await _allProducts.Update(product);
        }
    }
}
