using InternetShowcase.Data;
using InternetShowcase.Data.Models;
using InternetShowcase.Features.Categories.Models;
using InternetShowcase.Infrastructure.Services;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InternetShowcase.Features.Categories
{
    public class CategoriesService : ICategoriesService
    {
        private readonly ShowcaseDbContext _context;

        public CategoriesService(ShowcaseDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Category>> GetAll()
        {
            IEnumerable<Category> categories = await _context.Categories.ToListAsync();
            return categories;
        }

        public async Task<Category> GetByLine(string categoryLine)
        {            
            Category _category = await _context.Categories.SingleOrDefaultAsync(s => s.Line == categoryLine);
            if(_category == null)
            {
                return null;
            }
            return _category;
        }

        public async Task<IEnumerable<Product>> GetProductsOfCategory(List<int> categories_id)
        {
            IEnumerable<Product> products = await _context.Products.Where(p => categories_id.Contains(p.CategoryID))
                                                                   .ToListAsync();
            return products;
        }

        public async Task<Category> Create(Category category)
        {
            await _context.Categories.AddAsync(category);
            await _context.SaveChangesAsync();
            return category;
        }

        public async Task<Result> Delete(int id)
        {
            var category = await _context.Categories.FindAsync(id);
            if (category == null)
            {
                return "Category not Founded";
            }

            _context.Categories.Remove(category);
            await _context.SaveChangesAsync();

            return true;
        }       

        public async Task<Result> Update(Category newCategory)
        {
            var category = await _context.Categories.FindAsync(newCategory.Id);
            if (category == null)
            {
                return "Category not Founded";
            }
            _context.Categories.Update(newCategory);
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
