using InternetShowcase.Data.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InternetShowcase.Data
{
    public class DBObjects
    {
        public static void initial(ShowcaseDbContent content)
        {     
            if (!content.Categories.Any())
                content.Categories.AddRange(Categories.Select(c => c.Value));

            if (!content.Products.Any())
            {
                content.AddRange(
                    new Product
                    {
                        name = "Цветок №1",
                        price = 44,
                        oldPrice = 22,
                        description = "Что то про этот цветок",
                        imageUrl = $"assets/img/products/product-1.jpg",
                        available = true,
                        isFavourite = true,
                        Category = Categories["цветы"]
                    },
                    new Product
                    {
                        name = "Цветок №2",
                        price = 33,
                        oldPrice = 11,
                        description = "Что то про этот цветок",
                        imageUrl = $"assets/img/products/product-2.jpg",
                        available = true,
                        isFavourite = true,
                        Category = Categories["цветы"]
                    },
                     new Product
                     {
                         name = "Цветок №3",
                         price = 32,
                         oldPrice = 13,
                         description = "Что то про этот цветок",
                         imageUrl = $"assets/img/products/product-3.jpg",
                         available = true,
                         isFavourite = true,
                         Category = Categories["букеты"]
                     },
                      new Product
                      {
                          name = "Цветок №4",
                          price = 32,
                          oldPrice = 13,
                          description = "Что то про этот цветок",
                          imageUrl = $"assets/img/products/product-4.jpg",
                          available = true,
                          isFavourite = true,
                          Category = Categories["горшки"]
                      }
                    );
            }
            content.SaveChanges();
        }

        private static Dictionary<string, Category> category;
        public static Dictionary<string, Category> Categories
        {           
            get
            {
                if(category == null)
                {
                    var list = new Category[]
                    {
                        new Category { categoryName = "цветы" },
                        new Category { categoryName = "шары" },
                        new Category { categoryName = "удобрение" },
                        new Category { categoryName = "букеты" },
                        new Category { categoryName = "горшки" }
                    };

                    category = new Dictionary<string, Category>();
                    foreach(Category el in list)
                    {
                        category.Add(el.categoryName, el);
                    }
                }
                return category;
            }
        }
    }
}
