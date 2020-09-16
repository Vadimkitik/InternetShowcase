using InternetShowcase.Data.interfaces;
using InternetShowcase.Data.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace InternetShowcase.Data.Repository
{
    public class ProductReposytory : IAllProducts
    {
        private readonly ShowcaseDbContent _context;

        public ProductReposytory(ShowcaseDbContent context)
        {
            _context = context;
        }

        public IEnumerable<Product> Products => _context.Products.Include(c => c.Category);

        public Product GetByLine(string productLine)
        {
            return _context.Products.Single(p => p.productLine == productLine);

        }
        public Product Create(Product product)
        {
            _context.Products.Add(product);
            _context.SaveChanges();
            return product;
        }

        public bool Update(Product product)
        {
            if (product != null)
            {
                _context.Products.Update(product);
                _context.SaveChanges();
                return true;
            }
            return false;
        }

        public bool Delete(int id)
        {
            var product = _context.Products.FirstOrDefault(p => p.id == id);
            if (product != null)
            {
                _context.Products.Remove(product);
                _context.SaveChanges();
                return true;
            }
            return false;
        }


        public IEnumerable<Product> getFavProducts => _context.Products.Where(p => p.isFavourite == true).Include(c => c.Category);

        public Product getObjproduct(int productId) => _context.Products.FirstOrDefault(p => p.id == productId);
    }

}
