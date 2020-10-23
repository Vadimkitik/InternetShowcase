using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using InternetShowcase.Data.interfaces;
using InternetShowcase.Data.Models;
using InternetShowcase.ViewModels;

namespace InternetShowcase.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UnderSubCategoriesController : ControllerBase
    {
        private readonly IRepository<UnderSubCategory> _underSubCategories;
        private readonly IMapper _mapper;

        public UnderSubCategoriesController(IRepository<UnderSubCategory> underSubCategories, IMapper mapper)
        {
            _underSubCategories = underSubCategories;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<UnderSubCategoryView>>> GetCategories()
        {
            var underSubCategories = await _underSubCategories.GetAll();
            if (underSubCategories == null)
            {
                return BadRequest();
            }
            return _mapper.Map<List<UnderSubCategory>, List<UnderSubCategoryView>>((List<UnderSubCategory>)underSubCategories);
        }

        [HttpGet("{UnderSubCategoryLine}")]
        public async Task<ActionResult<UnderSubCategoryView>> GetCategory(string underSubCategoryLine)
        {
            var underSubCategory = await _underSubCategories.GetByType(underSubCategoryLine);
            if (underSubCategory != null)
            {
                return _mapper.Map<UnderSubCategory, UnderSubCategoryView>(underSubCategory);
            }
            return NotFound();
        }

        [HttpPost]
        public async Task<ActionResult<UnderSubCategoryView>> PostCategory(UnderSubCategory model)
        {
            if (ModelState.IsValid)
            {
                _mapper.Map<UnderSubCategory, UnderSubCategoryView>(await _underSubCategories.Create(model));
                return Ok(model);
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{id}")]
        public async Task<bool> PutCategory(int id, UnderSubCategory underSubCategory)
        {
            return await _underSubCategories.Update(id, underSubCategory);
        }

        [HttpDelete("{id}")]
        public async Task<bool> DeleteCategory(int id)
        {
            return await _underSubCategories.Delete(id);
        }
    }
}
