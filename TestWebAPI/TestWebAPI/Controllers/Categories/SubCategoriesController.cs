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
    public class SubCategoriesController : ControllerBase
    {
        private readonly IRepository<SubCategory> _categories;
        private readonly IMapper _mapper;

        public SubCategoriesController(IRepository<SubCategory> categories, IMapper mapper)
        {
            _categories = categories;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<SubCategoryView>>> GetCategories()
        {
            var categories = await _categories.GetAll();
            if (categories == null)
            {
                return BadRequest();
            }
            return _mapper.Map<List<SubCategory>, List<SubCategoryView>>((List<SubCategory>)categories);
        }

        [HttpGet("{categoryLine}")]
        public async Task<ActionResult<SubCategoryView>> GetCategory(string categoryLine)
        {
            var category = await _categories.GetByType(categoryLine);
            if (category != null)
            {
                return _mapper.Map<SubCategory, SubCategoryView>(category);
            }
            return NotFound();
        }

        [HttpPost]
        public async Task<ActionResult<SubCategoryView>> PostCategory(SubCategory model)
        {
            if (ModelState.IsValid)
            {
                _mapper.Map<SubCategory, SubCategoryView>(await _categories.Create(model));
                return Ok(model);
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{id}")]
        public async Task<bool> PutCategory(int id, SubCategory category)
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
