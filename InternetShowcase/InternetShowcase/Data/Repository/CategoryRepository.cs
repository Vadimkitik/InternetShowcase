using InternetShowcase.Data.interfaces;
using InternetShowcase.Data.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace InternetShowcase.Data.Repository
{
    public class CategoryRepository : IRepository<Category>
    {
        private readonly ShowcaseDbContext _context;

        public CategoryRepository(ShowcaseDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Category>> GetAll()
        {
            IEnumerable<Category> categories = await _context.Categories.ToListAsync();
            return categories;
        }

        public async Task<Category> GetByType(string categoryLine)
        {
            foreach (Category u in _context.Categories.Include(p => p.Products)) ;
            Category _category = await _context.Categories.SingleOrDefaultAsync(s => s.Line == categoryLine);
          
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

        

        public async Task<bool> Update(Category category)
        {
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
