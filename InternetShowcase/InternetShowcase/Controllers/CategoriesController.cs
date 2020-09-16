using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using InternetShowcase.Data.Models;
using AutoMapper;
using InternetShowcase.Data.interfaces;
using InternetShowcase.ViewModels;

namespace InternetShowcase.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly ICategories _categories;
        private readonly IMapper _mapper;

        public CategoriesController(ICategories categories, IMapper mapper)
        {
            _categories = categories;
            _mapper = mapper;
        }

        [HttpGet]
        public ActionResult<IEnumerable<CategoryView>> GetCategories()
        {
            var categories = _categories.GetCategories().ToList();
            if(categories == null)
            {
                return BadRequest();
            }
            return _mapper.Map<List<Category>, List<CategoryView>>(categories);
        }

       
        [HttpGet("{categoryLine}")]
        public ActionResult<CategoryView> GetCategory(string categoryLine)
        {
            var category = _mapper.Map<Category, CategoryView>(_categories.GetByType(categoryLine));
            if (category != null)
            {
                return category;
            }
            return NotFound();
        }
        
        [HttpPost]
        public ActionResult<CategoryView> PostCategory(Category model)
        {
            if (ModelState.IsValid)
            {
                _mapper.Map<Category, CategoryView>(_categories.Create(model));
                return Ok(model);
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{id}")]
        public bool PutCategory(int id, Category category)
        {
            return _categories.Update(id, category);
        }

        [HttpDelete("{id}")]
        public bool DeleteCategory(int id)
        {
            return _categories.Delete(id);
        }      
    }
}
