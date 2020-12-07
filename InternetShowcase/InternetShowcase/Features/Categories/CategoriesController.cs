using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using InternetShowcase.Data.Models;
using InternetShowcase.Features.Categories.Models;
using InternetShowcase.Infrastructure.Services;
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

        [Authorize]
        [HttpPost]
        public async Task<ActionResult<CategoryView>> CreateCategory(Category model)
        {
            if (ModelState.IsValid)
            {
                _mapper.Map<Category, CategoryView>(await _categories.Create(model));
                return Ok(model);
            }
            return BadRequest(ModelState);
        }

        [Authorize]
        [HttpPut()]
        public async Task<IActionResult> PutCategory(Category category)
        {
            var result = await _categories.Update(category);
            if (result.Failure)
            {
                return BadRequest(result.Error);
            }
            return Ok();
        }

        [Authorize]
        [HttpDelete("{id}")]
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
