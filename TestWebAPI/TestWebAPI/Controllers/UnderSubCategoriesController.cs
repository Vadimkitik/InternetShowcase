using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TestWebAPI.Data;
using TestWebAPI.Data.Models;

namespace TestWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UnderSubCategoriesController : ControllerBase
    {
        private readonly TestDbContext _context;

        public UnderSubCategoriesController(TestDbContext context)
        {
            _context = context;
        }

        // GET: api/UnderSubCategories
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UnderSubCategory>>> GetUnderSubCategories()
        {
            return await _context.UnderSubCategories.ToListAsync();
        }

        // GET: api/UnderSubCategories/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UnderSubCategory>> GetUnderSubCategory(int id)
        {
            var underSubCategory = await _context.UnderSubCategories.FindAsync(id);

            if (underSubCategory == null)
            {
                return NotFound();
            }

            return underSubCategory;
        }

        // PUT: api/UnderSubCategories/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUnderSubCategory(int id, UnderSubCategory underSubCategory)
        {
            if (id != underSubCategory.id)
            {
                return BadRequest();
            }

            _context.Entry(underSubCategory).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UnderSubCategoryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/UnderSubCategories
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<UnderSubCategory>> PostUnderSubCategory(UnderSubCategory underSubCategory)
        {
            _context.UnderSubCategories.Add(underSubCategory);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetUnderSubCategory", new { id = underSubCategory.id }, underSubCategory);
        }

        // DELETE: api/UnderSubCategories/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<UnderSubCategory>> DeleteUnderSubCategory(int id)
        {
            var underSubCategory = await _context.UnderSubCategories.FindAsync(id);
            if (underSubCategory == null)
            {
                return NotFound();
            }

            _context.UnderSubCategories.Remove(underSubCategory);
            await _context.SaveChangesAsync();

            return underSubCategory;
        }

        private bool UnderSubCategoryExists(int id)
        {
            return _context.UnderSubCategories.Any(e => e.id == id);
        }
    }
}
