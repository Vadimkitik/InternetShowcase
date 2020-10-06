using TestWebAPI.Data.interfaces;
using TestWebAPI.Data.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace TestWebAPI.Data.Repository
{
    public class CategoryRepository : IRepository<Category>
    {
        private readonly TestDbContext _context;

        public CategoryRepository(TestDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Category>> GetAll()
        {
            foreach (Category u in _context.Categories.Include(p => p.SubCategories)) ;
            foreach (SubCategory subCategory in _context.SubCategories.Include(s => s.UnderSubCategories)) ;
            IEnumerable<Category> categories = await _context.Categories.ToListAsync();
            return categories;
        }

        public async Task<Category> GetByType(string categoryLine)
        {
            foreach (Category u in _context.Categories.Include(p => p.Products)) ;
            Category _category = await _context.Categories.SingleOrDefaultAsync(s => s.CategoryLine == categoryLine);
          
            return _category;
        }

        public async Task<Category> Create(Category category)
        {
            await _context.Categories.AddAsync(category);
            await _context.SaveChangesAsync();
            return category;
        }

        public async Task<bool> Delete(int id)
        {
            var category = await _context.Categories.FindAsync(id);
            if (category == null)
            {
                return false;
            }

            _context.Categories.Remove(category);
            await _context.SaveChangesAsync();

            return true;
        }

        

        public async Task<bool> Update(int id, Category category)
        {
            
            if (id != category.Id)
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
