using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using TestWebAPI.Data.interfaces;
using TestWebAPI.Data.Models;
using TestWebAPI.ViewModels;

namespace TestWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly IRepository<Category> _categories;
        private readonly IMapper _mapper;

        public CategoriesController(IRepository<Category> categories, IMapper mapper)
        {
            _categories = categories;
            _mapper = mapper;
        }
    
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CategoryView>>> GetCategories()
        {
            var categories = await _categories.GetAll();
            if (categories == null)
            {
                return BadRequest();
            }
            return _mapper.Map<List<Category>, List<CategoryView>>((List<Category>)categories);
        }

        [HttpGet("{categoryLine}")]
        public async Task<ActionResult<CategoryView>> GetCategory(string categoryLine)
        {
            var category = await _categories.GetByType(categoryLine);
            if (category != null)
            {
                return _mapper.Map<Category, CategoryView>(category);
            }
            return NotFound();
        }

        [HttpPost]
        public async Task<ActionResult<CategoryView>> PostCategory(Category model)
        {
            if (ModelState.IsValid)
            {
                _mapper.Map<Category, CategoryView>(await _categories.Create(model));
                return Ok(model);
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{id}")]
        public async Task<bool> PutCategory(int id, Category category)
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
