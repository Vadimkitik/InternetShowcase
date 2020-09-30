using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TestWebAPI.Data.interfaces;
using TestWebAPI.Data.Models;

namespace TestWebAPI.Data.Repository.Categories
{
    public class SubCategoryRepository : IRepository<SubCategory>
    {
        private readonly TestDbContext _context;

        public SubCategoryRepository(TestDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<SubCategory>> GetAll()
        {
            foreach (SubCategory u in _context.SubCategories.Include(c => c.UnderSubCategories)) ;
            foreach (SubCategory u in _context.SubCategories.Include(c => c.Category)) ;

            IEnumerable<SubCategory> categories = await _context.SubCategories.ToListAsync();
            return categories;
        }

        public async Task<SubCategory> GetByType(string line)
        {
            foreach (SubCategory u in _context.SubCategories.Include(p => p.Products)) ;
            SubCategory _category = await _context.SubCategories.SingleOrDefaultAsync(s => s.subCategoryLine == line);

            return _category;
        }

        public async Task<SubCategory> Create(SubCategory item)
        {
            await _context.SubCategories.AddAsync(item);
            await _context.SaveChangesAsync();
            return item;
        }

        public async Task<bool> Delete(int id)
        {
            var category = await _context.SubCategories.FindAsync(id);
            if (category == null)
            {
                return false;
            }

            _context.SubCategories.Remove(category);
            await _context.SaveChangesAsync();

            return true;
        }



        public async Task<bool> Update(int id, SubCategory category)
        {

            if (id != category.id)
            {
                return false;
            }

            _context.Entry(category).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
                return true;
            }
            catch (DbUpdateConcurrencyException)
            {
                return false;
            }
        }

    }
}
