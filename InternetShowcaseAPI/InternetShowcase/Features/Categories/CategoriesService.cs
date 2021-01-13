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
            Category _category = await _context.Categories.Include(p => p.Products).SingleOrDefaultAsync(s => s.Line == categoryLine);
            if(_category == null)
            {
                return null;
            }
            _category.Children = await GetChildrenCategory(_category.Id); 
            return _category;
        }
        private async Task<ICollection<Category>> GetChildrenCategory(int id)
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

        public async Task<Result> Update(UpdateCategoryRequestModel model)
        {
            var category = await _context
                .Categories.Where(c => c.Id == model.Id)
                .FirstOrDefaultAsync();

            if (category == null)
            {
                return false;
            }

            category.Name = model.Name;
            category.Line = model.Line;
            category.Parent_Id = model.Parent_Id;

            await _context.SaveChangesAsync();

            return true;
        }
    }
}
