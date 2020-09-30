using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TestWebAPI.Data;
using TestWebAPI.Data.interfaces;
using TestWebAPI.Data.Models;
using TestWebAPI.ViewModels;

namespace TestWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UnderSubCategoriesController : ControllerBase
    {
        private readonly IRepository<UnderSubCategory> _categories;
        private readonly IMapper _mapper;

        public UnderSubCategoriesController(IRepository<UnderSubCategory> categories, IMapper mapper)
        {
            _categories = categories;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<UnderSubCategoryView>>> GetCategories()
        {
            var categories = await _categories.GetAll();
            if (categories == null)
            {
                return BadRequest();
            }
            return _mapper.Map<List<UnderSubCategory>, List<UnderSubCategoryView>>((List<UnderSubCategory>)categories);
        }

        [HttpGet("{categoryLine}")]
        public async Task<ActionResult<UnderSubCategoryView>> GetCategory(string categoryLine)
        {
            var category = await _categories.GetByType(categoryLine);
            if (category != null)
            {
                return _mapper.Map<UnderSubCategory, UnderSubCategoryView>(category);
            }
            return NotFound();
        }

        [HttpPost]
        public async Task<ActionResult<UnderSubCategoryView>> PostCategory(UnderSubCategory model)
        {
            if (ModelState.IsValid)
            {
                _mapper.Map<UnderSubCategory, UnderSubCategoryView>(await _categories.Create(model));
                return Ok(model);
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{id}")]
        public async Task<bool> PutCategory(int id, UnderSubCategory category)
        {
            return await _categories.Update(id, category);
        }

        [HttpDelete("{id}")]
        public async Task<bool> DeleteCategory(int id)
        {
            return await _categories.Delete(id);
        }
    }
}
