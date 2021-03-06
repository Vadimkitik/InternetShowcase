﻿using InternetShowcase.Data.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InternetShowcase.Data
{
    public class DBObjects
    {
        public static async Task InitializeAsync(ShowcaseDbContext context)
        {
            if (!context.Categories.Any())
            {
                await context.Categories.AddRangeAsync(Categories.Select(c => c.Value));
                await context.SaveChangesAsync();
                await context.Categories.AddRangeAsync(SubCategoies.Select(c => c.Value));
                await context.SaveChangesAsync();
                await context.Categories.AddRangeAsync(UnderSubCategoies.Select(c => c.Value));
                await context.SaveChangesAsync();
                await context.Products.AddRangeAsync(Products.Select(p => p.Value));
                await context.SaveChangesAsync();
            }
        }
        public static async Task AddAdminAndRolesAsync(UserManager<User> userManager, RoleManager<IdentityRole> roleManager)
        {
            string adminEmail = "alleutina.shop@gmail.com";
            string password = "1z2x3cQQer";
            string userName = "Administrator";
            if (await roleManager.FindByNameAsync("admin") == null)
            {
                await roleManager.CreateAsync(new IdentityRole("admin"));
            }
            if (await roleManager.FindByNameAsync("manager") == null)
            {
                await roleManager.CreateAsync(new IdentityRole("manager"));
            }
            if (await roleManager.FindByNameAsync("user") == null)
            {
                await roleManager.CreateAsync(new IdentityRole("user"));
            }
            if (await userManager.FindByNameAsync(userName) == null)
            {
                User admin = new User { Email = adminEmail, UserName = userName };
                var result = await userManager.CreateAsync(admin, password);
                if (result.Succeeded)
                {
                    var code = await userManager.GenerateEmailConfirmationTokenAsync(admin);
                    await userManager.ConfirmEmailAsync(admin, code);
                    await userManager.AddToRoleAsync(admin, "admin");
                }
            }
        }


        private static Dictionary<string, Category> category;
        public static Dictionary<string, Category> Categories
        {
            get
            {
                if (category == null)
                {
                    var list = new Category[]
                    {
                        new Category {
                            Line = "cveti",
                            Name = "Цветы",
                            Parent_Id = 0
                        },
                        new Category {
                            Line = "buketi",
                            Name = "Букеты",
                            Parent_Id = 0
                        },
                        new Category {
                            Line = "shari",
                            Name = "Шары",
                            Parent_Id = 0
                        },
                        new Category {
                            Line = "udobrenie",
                            Name = "Удобрения",
                            Parent_Id = 0
                        },
                        new Category {
                            Line = "gorshki",
                            Name = "Горшки",
                            Parent_Id = 0
                        },
                        new Category {
                            Line = "izdelia_iz_dereva",
                            Name = "Изделия из дерева",
                            Parent_Id = 0
                        }
                    };

                    category = new Dictionary<string, Category>();
                    pushElement(list, category);
                }
                return category;
            }
        }
        private static Dictionary<string, Category> subCategory;
        private static Dictionary<string, Category> SubCategoies
        {
            get
            {
                if (subCategory == null)
                {
                    var listSub = new Category[]
                    {
                        new Category {
                            Line = "iskusstvennie_cveti",
                            Name = "Искусственные цветы",
                            Parent_Id = category["Цветы"].Id,
                            Children = null
                        },
                        new Category {
                            Line = "jivie_cveti",
                            Name = "Живые цветы",
                            Parent_Id = category["Цветы"].Id,
                            Children = null
                        },
                        new Category {
                            Line = "gorshki_plastikovie",
                            Name = "Горшки для цветов пластиковые",
                            Parent_Id = category["Горшки"].Id,
                            Children = null
                        },
                        new Category {
                            Line = "gorshki_keramik",
                            Name = "Горшки для цветов керамические",
                            Parent_Id = category["Горшки"].Id,
                            Children = null
                        },
                        new Category {
                            Line = "shari_lateks",
                            Name = "Шары из латекса",
                            Parent_Id = category["Шары"].Id,
                            Children = null
                        },
                        new Category {
                            Line = "shari_folgirovanie",
                            Name = "Фольгированные шары",
                            Parent_Id = category["Шары"].Id,
                            Children = null
                        },
                        new Category {
                            Line = "buketi_iz_cvetov",
                            Name = "Букеты из цветов",
                            Parent_Id = category["Букеты"].Id,
                            Children = null
                        },
                        new Category {
                            Line = "buketi_iz_roz",
                            Name = "Букеты из Роз",
                            Parent_Id = category["Букеты"].Id,
                            Children = null
                        },
                        new Category {
                            Line = "sredstva_zaschiti_rasteniy",
                            Name = "Средства защиты растений",
                            Parent_Id = category["Удобрения"].Id,
                            Children = null
                        },
                        new Category {
                            Line = "grunt",
                            Name = "Грунт",
                            Parent_Id = category["Удобрения"].Id,
                            Children = null
                        },
                        new Category {
                            Line = "yaschiki",
                            Name = "Ящики",
                            Parent_Id = category["Изделия из дерева"].Id,
                            Children = null
                        },
                        new Category {
                            Line = "dekorativnie_izdeliya",
                            Name = "Декоративные изделия",
                            Parent_Id = category["Изделия из дерева"].Id,
                            Children = null
                        }
                    };
                    
                    subCategory = new Dictionary<string, Category>();
                    pushElement(listSub, subCategory);
                }
                return subCategory;
            }
        }
        private static Dictionary<string, Category> underSubCategory;
        private static Dictionary<string, Category> UnderSubCategoies
        {
            get
            {
                if (underSubCategory == null)
                {
                    var listUnderSub = new Category[]
                    {

                        new Category {
                            Line = "rozi",
                            Name = "Розы",
                            Parent_Id = subCategory["Живые цветы"].Id,
                            Children = null
                        },
                        new Category {
                            Line = "tulpani",
                            Name = "Тюльпаны",
                            Parent_Id = subCategory["Живые цветы"].Id,
                            Children = null
                        },
                        new Category {
                            Line = "hrizantemi",
                            Name = "Хризантемы",
                            Parent_Id = subCategory["Живые цветы"].Id,
                            Children = null
                        },
                        new Category {
                            Line = "venki_isk",
                            Name = "Венки искусственные",
                            Parent_Id = subCategory["Искусственные цветы"].Id,
                            Children = null
                        },
                        new Category {
                            Line = "rozi_isk",
                            Name = "Розы искусственные",
                            Parent_Id = subCategory["Искусственные цветы"].Id,
                            Children = null
                        },
                        new Category {
                            Line = "shari_lateks_bez_obr",
                            Name = "Шары латексные без обработки",
                            Parent_Id = subCategory["Шары из латекса"].Id,
                            Children = null
                        },
                        new Category {
                            Line = "shari_lateks_happy_birthday",
                            Name = "С днем рождения!",
                            Parent_Id = subCategory["Шары из латекса"].Id,
                            Children = null
                        },
                        new Category {
                            Line = "shari_lateks_prikol",
                            Name = "Прикольные",
                            Parent_Id = subCategory["Шары из латекса"].Id,
                            Children = null
                        },
                        new Category {
                            Line = "shari_folgirovanie_cifri",
                            Name = "Шары цифры",
                            Parent_Id = subCategory["Фольгированные шары"].Id,
                            Children = null
                        },
                        new Category {
                            Line = "shari_folgirovanie_hearts",
                            Name = "Шары в форме сердца",
                            Parent_Id = subCategory["Фольгированные шары"].Id,
                            Children = null
                        },
                        new Category {
                            Line = "shari_folgirovanie_stars",
                            Name = "Шары в форме звезды",
                            Parent_Id = subCategory["Фольгированные шары"].Id,
                            Children = null
                        },
                        new Category {
                            Line = "buketi_romashki",
                            Name = "Букеты из Ромашек",
                            Parent_Id = subCategory["Букеты из цветов"].Id,
                            Children = null
                        },
                        new Category {
                            Line = "buketi_hrizantem",
                            Name = "Букеты из Хризантем",
                            Parent_Id = subCategory["Букеты из цветов"].Id,
                            Children = null
                        },
                        new Category {
                            Line = "buketi_suhocvetov",
                            Name = "Букеты из Сухоцветов",
                            Parent_Id = subCategory["Букеты из цветов"].Id,
                            Children = null
                        },
                        new Category {
                            Line = "buketi_tulpani",
                            Name = "Букеты из Тюльпанов",
                            Parent_Id = subCategory["Букеты из цветов"].Id,
                            Children = null
                        },
                        new Category {
                            Line = "buketi_miks",
                            Name = "Микс букеты",
                            Parent_Id = subCategory["Букеты из цветов"].Id,
                            Children = null
                        },
                        new Category {
                            Line = "buketi_roz_11",
                            Name = "11 Роз",
                            Parent_Id = subCategory["Букеты из Роз"].Id,
                            Children = null
                        },
                        new Category {
                            Line = "buketi_roz_101",
                            Name = "101 Роза",
                            Parent_Id = subCategory["Букеты из Роз"].Id,
                            Children = null
                        },
                        new Category {
                            Line = "bolshie_plastik_gorshki",
                            Name = "Большие пластиковые горшки для цветов",
                            Parent_Id = subCategory["Горшки для цветов пластиковые"].Id,
                            Children = null
                        },
                        new Category {
                            Line = "balkonie_plastik_gorshki",
                            Name = "Балконные пластиковые горшки для цветов",
                            Parent_Id = subCategory["Горшки для цветов пластиковые"].Id,
                            Children = null
                        },
                        new Category {
                            Line = "podvesnie_plastik_gorshki",
                            Name = "Подвесные пластиковые горшки для цветов",
                            Parent_Id = subCategory["Горшки для цветов пластиковые"].Id,
                            Children = null
                        },
                        new Category {
                            Line = "bolshie_keramik_gorshki",
                            Name = "Большие керамические горшки для цветов",
                            Parent_Id = subCategory["Горшки для цветов керамические"].Id,
                            Children = null
                        },
                        new Category {
                            Line = "kvadrat_keramik_gorshki",
                            Name = "Квадратные керамические горшки для цветов",
                            Parent_Id = subCategory["Горшки для цветов керамические"].Id,
                            Children = null
                        },
                        new Category {
                            Line = "kruglie_keramik_gorshki",
                            Name = "Круглые керамические горшки для цветов",
                            Parent_Id = subCategory["Горшки для цветов керамические"].Id,
                            Children = null
                        },
                        new Category {
                            Line = "udobreniya_dlya_arhidet",
                            Name = "Удобрения для архидей",
                            Parent_Id = subCategory["Средства защиты растений"].Id,
                            Children = null
                        },
                        new Category {
                            Line = "zaschita_ot_vrediteley",
                            Name = "Защита от вредителей",
                            Parent_Id = subCategory["Средства защиты растений"].Id,
                            Children = null
                        },
                        new Category {
                            Line = "kuriniy_pomet",
                            Name = "Куриный помет",
                            Parent_Id = subCategory["Грунт"].Id,
                            Children = null
                        },
                        new Category {
                            Line = "grunt_flora",
                            Name = "Грунт флора",
                            Parent_Id = subCategory["Грунт"].Id,
                            Children = null
                        },
                        new Category {
                            Line = "yaschiki_dlya_cvetov",
                            Name = "Ящики для цветов",
                            Parent_Id = subCategory["Ящики"].Id,
                            Children = null
                        },
                        new Category {
                            Line = "ukrasheniya",
                            Name = "Украшения",
                            Parent_Id = subCategory["Декоративные изделия"].Id,
                            Children = null
                        },
                         new Category {
                            Line = "dekor_telega",
                            Name = "Декоративые телеги",
                            Parent_Id = subCategory["Декоративные изделия"].Id,
                            Children = null
                        },
                          new Category {
                            Line = "dekor_kolodec",
                            Name = "Декоративный колодец",
                            Parent_Id = subCategory["Декоративные изделия"].Id,
                            Children = null
                        }
                    };
                    underSubCategory = new Dictionary<string, Category>();
                    pushElement(listUnderSub, underSubCategory);
                }
                return underSubCategory;
            }
        }

        private static Dictionary<string, Product> product;
        private static Dictionary<string, Product> Products
        {
            get
            {
                if (product == null)
                {
                    var rnd = new Random();
                    var listProducts = new List<Product>();

                    var listCategoryID = new List<int>();
                    foreach(var el in underSubCategory)
                    {
                        listCategoryID.Add(el.Value.Id);
                    }
                    
                    for (int i = 0; i < 30; i++)
                    {
                        var priceRnd = rnd.Next(5, 10);
                        int? oldPriceRnd = rnd.Next(10, 15);
                        var imageUlrRnd = rnd.Next(1, 12);
                        var underSubCatRnd = rnd.Next(listCategoryID[0], listCategoryID[listCategoryID.Count-1]+1);

                        if ( i%3 == 0)
                        {
                            oldPriceRnd = null;
                        }

                        var product = new Product
                        {
                            ProductLine = "test_product_" + i,
                            Name = "Test Product " + i,
                            Description = "Хризантемы, как и розы, считаются универсальными цветами, сочетающимися с другими представителями растительного мира. Дарить их можно в честь любого торжественного повода. Выбирая в качестве презента композицию из роз и хризантем, вы сможете передать всю глубину ваших чувств и непременно доставить удовольствие и радость тому, кто получит ваш искренний подарок.",
                            Price = priceRnd,
                            OldPrice = oldPriceRnd,
                            ImageUrl = $"api/Resources/images/product-{imageUlrRnd}.jpg",
                            IsFavourite = "true",
                            Available = "true",
                            CategoryID = underSubCatRnd
                        };
                        listProducts.Add(product);
                    }
                    product = new Dictionary<string, Product>();
                    foreach (Product el in listProducts)
                    {
                        product.Add(el.Name, el);
                    }
                }                
                return product;
            }
        }

        private static Dictionary<string, Category> pushElement(Category[] list, Dictionary<string, Category> cata)
        {
            foreach (Category el in list)
            {
                cata.Add(el.Name, el);
            }
            return cata;
        }
    }
}
