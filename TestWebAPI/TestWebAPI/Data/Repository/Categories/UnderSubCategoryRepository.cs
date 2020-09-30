using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TestWebAPI.Data.interfaces;
using TestWebAPI.Data.Models;

namespace TestWebAPI.Data.Repository.Categories
{
    public class UnderSubCategoryRepository : IRepository<UnderSubCategory>
    {
        private readonly TestDbContext _context;

        public UnderSubCategoryRepository(TestDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<UnderSubCategory>> GetAll()
        {
            foreach (UnderSubCategory u in _context.UnderSubCategories.Include(c => c.SubCategory));

            IEnumerable<UnderSubCategory> categories = await _context.UnderSubCategories.ToListAsync();
            return categories;
        }

        public async Task<UnderSubCategory> GetByType(string line)
        {
            foreach (UnderSubCategory u in _context.UnderSubCategories.Include(p => p.Products)) ;
            UnderSubCategory _category = await _context.UnderSubCategories.SingleOrDefaultAsync(s => s.underSubCategoryLine == line);

            return _category;
        }

        public async Task<UnderSubCategory> Create(UnderSubCategory item)
        {
            await _context.UnderSubCategories.AddAsync(item);
            await _context.SaveChangesAsync();
            return item;
        }

        public async Task<bool> Delete(int id)
        {
            var category = await _context.UnderSubCategories.FindAsync(id);
            if (category == null)
            {
                return false;
            }

            _context.UnderSubCategories.Remove(category);
            await _context.SaveChangesAsync();

            return true;
        }



        public async Task<bool> Update(int id, UnderSubCategory category)
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
