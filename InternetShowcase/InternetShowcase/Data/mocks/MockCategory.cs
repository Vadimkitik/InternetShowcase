using InternetShowcase.Data.interfaces;
using InternetShowcase.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InternetShowcase.Data.mocks
{
    public class MockCategory : IProductsCategory
    {
        public IEnumerable<Category> AllCategories {
            get
            {
                return new List<Category>
                {
                    new Category { categoryName = "цветы" },
                    new Category { categoryName = "шары" },
                    new Category { categoryName = "удобрение" },
                    new Category { categoryName = "букеты" },
                    new Category { categoryName = "горшки" }
                };
            }
        }

    }
}
