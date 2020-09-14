using InternetShowcase.Data.Models;
using System.Collections.Generic;
using System.Linq;

namespace InternetShowcase.Data
{
    public class DBObjects
    {
        public static void initial(ShowcaseDbContent context)
        {
            if (!context.Users.Any())
            {
                User user = new User { Email = "alleutina@gmail.com", Password = "123321QQ", Name = "Alla", Role = "Admin" };
                context.Users.Add(user);
                context.SaveChanges();
            }

            if (!context.Categories.Any())
                context.Categories.AddRange(Categories.Select(c => c.Value));

            if (!context.Products.Any())
            {
                context.AddRange(
                    new Product
                    {
                        name = "Цветок №1",
                        price = 44,
                        oldPrice = 22,
                        description = "Что то про этот цветок",
                        imageUrl = $"Resources/images/product-1.jpg",
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
                        imageUrl = $"Resources/images/product-2.jpg",
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
                         imageUrl = $"Resources/images/product-3.jpg",
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
                          imageUrl = $"Resources/images/product-4.jpg",
                          available = true,
                          isFavourite = true,
                          Category = Categories["горшки"]
                      },
                      new Product
                      {
                          name = "Grunt №1",
                          price = 40,
                          oldPrice = 55,
                          description = "SUper GRUNT!! YA EST' GRUT, GRUUUNT!",
                          imageUrl = $"Resources/images/grunt-1.jpg",
                          available = true,
                          isFavourite = true,
                          Category = Categories["удобрение"]
                      }
                    );
            }
            context.SaveChanges();
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
                        new Category { categoryName = "горшки" },
                        new Category { categoryName = "изделия из дерева" }

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
