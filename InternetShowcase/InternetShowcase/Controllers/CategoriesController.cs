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
            return _mapper.Map<List<Category>, List<CategoryView>>(categories);
        }

       
        [HttpGet("{id}")]
        public ActionResult<CategoryView> GetCategory(string category)
        {
            return _mapper.Map<Category, CategoryView>(_categories.GetById(category));
        }

       
        [HttpPut("{id}")]
        public bool PutCategory(int id, Category category)
        {
            return _categories.Update(id, category);
        }

        
        [HttpPost]
        public ActionResult<CategoryView> PostCategory(Category model)
        {
            return _mapper.Map<Category, CategoryView>(_categories.Create(model));
        }
       
        [HttpDelete("{id}")]
        public bool DeleteCategory(int id)
        {
            return _categories.Delete(id);
        }

      
    }
}
