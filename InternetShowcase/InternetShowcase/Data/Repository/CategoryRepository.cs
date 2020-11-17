using InternetShowcase.Data.interfaces;
using InternetShowcase.Data.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
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
            
            Category _category = await _context.Categories.Include(p => p.Products).SingleOrDefaultAsync(s => s.Line == categoryLine);
            _category.Children = await GetChildrenCategory(_category.Id); 

            return _category;
        }
        public async Task<ICollection<Category>> GetChildrenCategory(int id)
        {
            ICollection<Category> categories;

            if (!_context.Categories.Any(c => id == c.Parent_Id))
            {
                return null;
            }
            else
            {
                categories = await _context.Categories.Where(c => id == c.Parent_Id).Include(p => p.Products).ToListAsync();
                foreach(var category in categories)
                {
                    category.Children = await GetChildrenCategory(category.Id);
                }         
            }
            return categories;
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
