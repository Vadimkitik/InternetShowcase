﻿using System;
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
    public class SubCategoriesController : ControllerBase
    {
        private readonly TestDbContext _context;

        public SubCategoriesController(TestDbContext context)
        {
            _context = context;
        }

        // GET: api/SubCategories
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SubCategory>>> GetSubCategories()
        {
            return await _context.SubCategories.ToListAsync();
        }

        // GET: api/SubCategories/5
        [HttpGet("{subCategoryLine}")]
        public async Task<ActionResult<SubCategory>> GetSubCategory(string subCategoryLine)
        {
            foreach (SubCategory u in _context.SubCategories.Include(p => p.Products)) ;
            SubCategory subCategory = await _context.SubCategories.SingleOrDefaultAsync(s => s.subCategoryLine == subCategoryLine);

            if (subCategory == null)
            {
                return NotFound();
            }

            return subCategory;
        }

        // PUT: api/SubCategories/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSubCategory(int id, SubCategory subCategory)
        {
            if (id != subCategory.id)
            {
                return BadRequest();
            }

            _context.Entry(subCategory).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SubCategoryExists(id))
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

        // POST: api/SubCategories
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<SubCategory>> PostSubCategory(SubCategory subCategory)
        {
            _context.SubCategories.Add(subCategory);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSubCategory", new { id = subCategory.id }, subCategory);
        }

        // DELETE: api/SubCategories/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<SubCategory>> DeleteSubCategory(int id)
        {
            var subCategory = await _context.SubCategories.FindAsync(id);
            if (subCategory == null)
            {
                return NotFound();
            }

            _context.SubCategories.Remove(subCategory);
            await _context.SaveChangesAsync();

            return subCategory;
        }

        private bool SubCategoryExists(int id)
        {
            return _context.SubCategories.Any(e => e.id == id);
        }
    }
}
