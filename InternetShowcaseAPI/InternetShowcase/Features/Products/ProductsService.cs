using InternetShowcase.Data;
using InternetShowcase.Data.Models;
using InternetShowcase.Features.Products.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InternetShowcase.Features.Products
{
    public class ProductsService : IProductsService
    {
        private readonly ShowcaseDbContext _context;

        public ProductsService(ShowcaseDbContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<Product>> GetAll()
        {
            foreach (Product u in _context.Products.Include(p => p.Category)) ;
            var products = await _context.Products.ToListAsync();
            return products;
        }
       

        public async Task<Product> GetByLine(string productLine)
        {
            //foreach (Product u in _context.Products.Include(p => p.Category)) ;
            Product product = await _context.Products.Include(p => p.Category).SingleOrDefaultAsync(p => p.ProductLine == productLine);
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
            _context.Products.Update(product);
            await _context.SaveChangesAsync();

            return true;
        }

        public async Task<bool> Delete(int id)
        {
            var product = await _context.Products.FirstOrDefaultAsync(p => p.Id == id);
            if (product != null)
            {
                _context.Products.Remove(product);
                await _context.SaveChangesAsync();
                return true;
            }
            return false;
        }


        public IEnumerable<Product> getFavProducts 
            => _context.Products.Where(p => p.IsFavourite == "true").Include(c => c.Category);
    }

}
