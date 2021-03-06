﻿using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using InternetShowcase.Data.Models;
using InternetShowcase.Features.Categories.Models;
using InternetShowcase.Features.Products.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace InternetShowcase.Features.Categories
{
    public class CategoriesController : ApiController
    {
        private readonly ICategoriesService _categories;
        private readonly IMapper _mapper;

        public CategoriesController(ICategoriesService categories, IMapper mapper)
        {
            _categories = categories;
            _mapper = mapper;
        }
    
        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CategoryView>>> GetCategories()
        {
            var categories = await _categories.GetAll();
            if (categories != null)
            {
                return _mapper.Map<List<Category>, List<CategoryView>>((List<Category>)categories); 
            }
            return BadRequest();
        }

        [HttpGet("{categoryLine}")]
        public async Task<ActionResult<CategoryView>> GetCategory(string categoryLine)
        {
            var category = await _categories.GetByLine(categoryLine);
            if (category != null)
            {
                return _mapper.Map<Category, CategoryView>(category);
            }
            return NotFound();
        }

        [HttpPost]
        [Route(nameof(GetProductsOfCategory))]
        public async Task<ActionResult<IEnumerable<ProductView>>> GetProductsOfCategory(List<int> categories_id)
        {
            var products = await _categories.GetProductsOfCategory(categories_id);
            if (products == null)
            {
                return BadRequest();
            }
            return _mapper.Map<List<Product>, List<ProductView>>((List<Product>)products);
        }

        [HttpPost]
        [Authorize(Roles = "admin, manager")]
        public async Task<ActionResult<CategoryView>> CreateCategory(Category model)
        {
            if (ModelState.IsValid)
            {
                _mapper.Map<Category, CategoryView>(await _categories.Create(model));
                return Ok(model);
            }
            return BadRequest(ModelState);
        }

        [HttpPut]
        [Authorize(Roles = "admin, manager")]
        public async Task<IActionResult> EditCategory(UpdateCategoryRequestModel model)
        {
            var result = await _categories.Update(_mapper.Map<UpdateCategoryRequestModel, Category>(model));
            if (result.Failure)
            {
                return BadRequest(result.Error);
            }
            return Ok();
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "admin, manager")]
        public async Task<IActionResult> DeleteCategory(int id)
        {
            var result = await _categories.Delete(id);
            if (result.Failure)
            {
                return BadRequest(result.Error);
            }
            return Ok();
        }
    }
}
