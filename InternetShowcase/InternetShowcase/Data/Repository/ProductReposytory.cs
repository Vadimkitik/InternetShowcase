using InternetShowcase.Data.interfaces;
using InternetShowcase.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InternetShowcase.Data.Repository
{
    public class ProductReposytory : IAllProducts
    {
        private readonly ShowcaseDbContent dbContent;

        public ProductReposytory(ShowcaseDbContent content)
        {
            dbContent = content;
        }

        public IEnumerable<Product> Products => dbContent.Products.Include(c => c.Category);

        public Product GetById(int id)
        {
            return dbContent.Products.Single(p => p.id == id);

        }
        public Product Create(Product product)
        {         
            dbContent.Products.Add(product);
            dbContent.SaveChanges();
            return product;
        }

        public bool Update(Product product)
        {
            if (product != null)
            {
                dbContent.Products.Update(product);
                dbContent.SaveChanges();
                return true;
            }
            return false;
        }

        public bool Delete(int id)
        {
            var product = dbContent.Products.FirstOrDefault(p => p.id == id);
            if (product != null)
            {
                dbContent.Products.Remove(product);
                dbContent.SaveChanges();
                return true;
            }
            return false;
        }


        public IEnumerable<Product> getFavProducts => dbContent.Products.Where(p => p.isFavourite == true).Include(c => c.Category);

        public Product getObjproduct(int productId) => dbContent.Products.FirstOrDefault(p => p.id == productId);
    }

}
