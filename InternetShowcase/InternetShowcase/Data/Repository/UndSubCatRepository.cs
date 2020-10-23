using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using InternetShowcase.Data.interfaces;
using InternetShowcase.Data.Models;

namespace InternetShowcase.Data.Repository
{
    public class UndSubCatRepository : IRepository<UnderSubCategory>
    {
        private readonly ShowcaseDbContext _context;

        public UndSubCatRepository(ShowcaseDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<UnderSubCategory>> GetAll()
        {
            IEnumerable<UnderSubCategory> udnerSubCategories = await _context.UnderSubCategories.ToListAsync();
            return udnerSubCategories;
        }

        public async Task<UnderSubCategory> GetByType(string underSubCategoryLine)
        {
            foreach (UnderSubCategory u in _context.UnderSubCategories.Include(p => p.Products)) ;
            UnderSubCategory udnerSubCategory = await _context.UnderSubCategories.SingleOrDefaultAsync(s => s.UnderSubCategoryLine == underSubCategoryLine);
            return udnerSubCategory;
        }

        public async Task<UnderSubCategory> Create(UnderSubCategory udnerSubCategory)
        {
            await _context.UnderSubCategories.AddAsync(udnerSubCategory);
            await _context.SaveChangesAsync();
            return udnerSubCategory;
        }

        public async Task<bool> Delete(int id)
        {
            var udnerSubCategory = await _context.UnderSubCategories.FindAsync(id);
            if (udnerSubCategory == null)
            {
                return false;
            }

            _context.UnderSubCategories.Remove(udnerSubCategory);
            await _context.SaveChangesAsync();

            return true;
        }



        public async Task<bool> Update(int id, UnderSubCategory udnerSubCategory)
        {

            if (id != udnerSubCategory.Id)
            {
                return false;
            }

            _context.Entry(udnerSubCategory).State = EntityState.Modified;

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
