using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using TestWebAPI.Data.interfaces;
using TestWebAPI.Data.Models;

namespace TestWebAPI.Data.Repository
{
    public class SubCatRepository : IRepository<SubCategory>
    {
        private readonly TestDbContext _context;

        public SubCatRepository(TestDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<SubCategory>> GetAll()
        {
            IEnumerable<SubCategory> subCategories = await _context.SubCategories.ToListAsync();
            return subCategories;
        }

        public async Task<SubCategory> GetByType(string subCategoryLine)
        {
            foreach (SubCategory u in _context.SubCategories.Include(p => p.Products)) ;
            SubCategory subCategory = await _context.SubCategories.SingleOrDefaultAsync(s => s.SubCategoryLine == subCategoryLine);

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
