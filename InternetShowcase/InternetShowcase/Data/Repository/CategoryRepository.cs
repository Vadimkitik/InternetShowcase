using InternetShowcase.Data.interfaces;
using InternetShowcase.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InternetShowcase.Data.Repository
{
    public class CategoryRepository : IProductsCategory
    {
        private readonly ShowcaseDbContent dbContent;

        public CategoryRepository(ShowcaseDbContent content)
        {
            dbContent = content;
        }
        public IEnumerable<Category> AllCategories => dbContent.Categories;
    }
}
