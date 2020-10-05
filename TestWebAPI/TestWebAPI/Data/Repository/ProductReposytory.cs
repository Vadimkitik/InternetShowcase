using TestWebAPI.Data.interfaces;
using TestWebAPI.Data.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace TestWebAPI.Data.Repository
{
    public class ProductReposytory : IAllProducts
    {
        private readonly TestDbContext _context;

        public ProductReposytory(TestDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Product>> GetAll()
        {
            foreach (Product u in _context.Products.Include(c => c.Category)) ;
            foreach (Category u in _context.Categories.Include(c => c.SubCategories)) ;
            foreach (SubCategory u in _context.SubCategories.Include(c => c.UnderSubCategories)) ;

            IEnumerable<Product> products = await _context.Products.Include(c => c.Category).ToListAsync();
            return products;
        }
       

        public async Task<Product> GetByLine(string productLine)
        {
            Product product = await _context.Products.SingleOrDefaultAsync(p => p.productLine == productLine);

            if (product != null ) {
                product.Category = await _context.Categories.FindAsync(product.categoryID);
                product.SubCategory = await _context.SubCategories.FindAsync(product.subcategoryID);
                product.UnderSubCategory = await _context.UnderSubCategories.FindAsync(product.underSubcategoryID);
                return product;                        
            }
            return product;
        }
        public async Task<Product> Create(Product product)
        {
            _context.Products.Add(product);
            await _context.SaveChangesAsync();
            return product;
        }

        public async Task<bool> Update(Product product)
        {
            if (product != null)
            {
                _context.Products.Update(product);
                await _context.SaveChangesAsync();
                return true;
            }
            return false;
        }

        public async Task<bool> Delete(int id)
        {
            var product = await _context.Products.FirstOrDefaultAsync(p => p.id == id);
            if (product != null)
            {
                _context.Products.Remove(product);
                await _context.SaveChangesAsync();
                return true;
            }
            return false;
        }


        public IEnumerable<Product> getFavProducts => _context.Products.Where(p => p.isFavourite == true).Include(c => c.Category);

        public Product getObjproduct(int productId) => _context.Products.FirstOrDefault(p => p.id == productId);
    }

}
