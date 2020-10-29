using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using InternetShowcase.Data.interfaces;
using InternetShowcase.Data.Models;

namespace InternetShowcase.Data.Repository
{
    public class SubCatRepository : IRepository<SubCategory>
    {
        private readonly ShowcaseDbContext _context;

        public SubCatRepository(ShowcaseDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<SubCategory>> GetAll()
        {
            IEnumerable<SubCategory> subCategories = await _context.SubCategories.ToListAsync();
            return subCategories;
        }

        public async Task<SubCategory> GetByType(string CategoryLine)
        {
            foreach (SubCategory u in _context.SubCategories.Include(p => p.Products)) ;
            SubCategory subCategory = await _context.SubCategories.SingleOrDefaultAsync(s => s.CategoryLine == CategoryLine);

            return subCategory;
        }

        public async Task<SubCategory> Create(SubCategory subCategory)
        {
            await _context.SubCategories.AddAsync(subCategory);
            await _context.SaveChangesAsync();
            return subCategory;
        }

        public async Task<bool> Delete(int id)
        {
            var subCategory = await _context.SubCategories.FindAsync(id);
            if (subCategory == null)
            {
                return false;
            }

            _context.SubCategories.Remove(subCategory);
            await _context.SaveChangesAsync();

            return true;
        }



        public async Task<bool> Update(int id, SubCategory subCategory)
        {

            if (id != subCategory.Id)
            {
                return false;
            }

            _context.Entry(subCategory).State = EntityState.Modified;

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
