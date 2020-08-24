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


        public IEnumerable<Product> getFavProducts => dbContent.Products.Where(p => p.isFavourite == true).Include(c => c.Category);

        public Product getObjproduct(int productId) => dbContent.Products.FirstOrDefault(p => p.id == productId);
    }
}
