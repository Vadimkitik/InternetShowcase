﻿using TestWebAPI.Data.interfaces;
using TestWebAPI.Data.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace TestWebAPI.Data.Repository
{
    public class CategoryRepository : ICategories
    {
        private readonly TestDbContext _context;

        public CategoryRepository(TestDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Category> GetCategories()
        {
            foreach (Category u in _context.Categories.Include(p => p.Products));
            return _context.Categories.OrderBy(c => c.id);
        }

        public Category GetByType(string categoryLine)
        {
            foreach (Category u in _context.Categories.Include(p => p.Products)) ;
            Category _category = _context.Categories.SingleOrDefault(s => s.categoryLine == categoryLine);
          
            return _category;
        }

        public Category Create(Category category)
        {
            _context.Categories.Add(category);
            _context.SaveChanges();
            return category;
        }

        public bool Delete(int id)
        {
            var category = _context.Categories.Find(id);
            if (category == null)
            {
                return false;
            }

            _context.Categories.Remove(category);
            _context.SaveChanges();

            return true;
        }

        

        public bool Update(int id, Category category)
        {
            
            if (id != category.id)
            {
                return false;
            }

            _context.Entry(category).State = EntityState.Modified;

            try
            {
                _context.SaveChanges();
                return true;
            }
            catch (DbUpdateConcurrencyException)
            {
                return false;
            }
        }
    }
}
