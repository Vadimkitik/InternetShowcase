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
    public class SubCategoriesController : ControllerBase
    {
        private readonly IRepository<SubCategory> _subCategories;
        private readonly IMapper _mapper;

        public SubCategoriesController(IRepository<SubCategory> subCategories, IMapper mapper)
        {
            _subCategories = subCategories;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<SubCategoryView>>> GetCategories()
        {
            var subCategories = await _subCategories.GetAll();
            if (subCategories == null)
            {
                return BadRequest();
            }
            return _mapper.Map<List<SubCategory>, List<SubCategoryView>>((List<SubCategory>)subCategories);
        }

        [HttpGet("{SubCategoryLine}")]
        public async Task<ActionResult<SubCategoryView>> GetCategory(string subCategoryLine)
        {
            var subCategory = await _subCategories.GetByType(subCategoryLine);
            if (subCategory != null)
            {
                return _mapper.Map<SubCategory, SubCategoryView>(subCategory);
            }
            return NotFound();
        }

        [HttpPost]
        public async Task<ActionResult<SubCategoryView>> PostCategory(SubCategory model)
        {
            if (ModelState.IsValid)
            {
                _mapper.Map<SubCategory, SubCategoryView>(await _subCategories.Create(model));
                return Ok(model);
            }
            return BadRequest(ModelState);
        }

        [HttpPut()]
        public async Task<bool> PutCategory(SubCategory subCategory)
        {
            return await _subCategories.Update(subCategory);
        }

        [HttpDelete("{id}")]
        public async Task<bool> DeleteCategory(int id)
        {
            return await _subCategories.Delete(id);
        }
    }
}
