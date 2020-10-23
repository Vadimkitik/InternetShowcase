using System.Collections.Generic;
using System.Linq;
using InternetShowcase.Data.Models;

namespace InternetShowcase.Data
{
    public class DBObjects
    {
        public static void initial(ShowcaseDbContext context)
        {
            if (!context.Users.Any())
            {
                User user = new User { Email = "alleutina@gmail.com", Password = "1z2x3cQQ", Name = "Alla", Role = "Admin" };
                context.Users.Add(user);
                context.SaveChanges();
            }

            if (!context.Categories.Any()){
                context.Categories.AddRange(Categories.Select(c => c.Value));
                context.SaveChanges();
            }
            if (!context.SubCategories.Any())
            {
                context.SubCategories.AddRange(SubCategories.Select(c => c.Value));
                context.SaveChanges();
            }
            if (!context.UnderSubCategories.Any())
            {
                context.UnderSubCategories.AddRange(UnderSubCategories.Select(c => c.Value));
                context.SaveChanges();
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
                            CategoryLine = "cveti", 
                            CategoryName = "Цветы" 
                        },
                        new Category {
                            CategoryLine = "buketi",
                            CategoryName = "Букеты"
                        },
                        new Category {
                            CategoryLine = "shari", 
                            CategoryName = "Шары"
                        },
                        new Category { 
                            CategoryLine = "udobrenie", 
                            CategoryName = "Удобрения"
                        },                        
                        new Category { 
                            CategoryLine = "gorshki", 
                            CategoryName = "Горшки"
                        },
                        new Category { 
                            CategoryLine = "izdelia_iz_dereva", 
                            CategoryName = "Изделия из дерева"
                        }
                    };

                    category = new Dictionary<string, Category>();
                    foreach (Category el in list)
                    {
                        category.Add(el.CategoryName, el);
                    }
                }
                return category;
            }
        }

        private static Dictionary<string, SubCategory> subCategory;
        public static Dictionary<string, SubCategory> SubCategories
        {
            get
            {
                if (subCategory == null)
                {
                    var list = new SubCategory[]
                    {
                        new SubCategory {
                            SubCategoryLine = "iskusstvennie_cveti",
                            SubCategoryName = "Искусственные цветы",
                            Category = category["Цветы"]
                        },
                        new SubCategory {
                            SubCategoryLine = "jivie_cveti",
                            SubCategoryName = "Живые цветы",
                            Category = category["Цветы"]
                        },                        
                        new SubCategory {
                            SubCategoryLine = "gorshki_plastikovie",
                            SubCategoryName = "Горшки для цветов пластиковые",
                            Category = category["Горшки"]
                        },
                        new SubCategory {
                            SubCategoryLine = "gorshki_keramik",
                            SubCategoryName = "Горшки для цветов керамические",
                            Category = category["Горшки"]
                        },
                        new SubCategory {
                            SubCategoryLine = "shari_lateks",
                            SubCategoryName = "Шары из латекса",
                            Category = category["Шары"]
                        },
                        new SubCategory {
                            SubCategoryLine = "shari_folgirovanie",
                            SubCategoryName = "Фольгированные шары",
                            Category = category["Шары"]
                        },
                        new SubCategory {
                            SubCategoryLine = "buketi_iz_cvetov",
                            SubCategoryName = "Букеты из цветов",
                            Category = category["Букеты"]
                        },
                        new SubCategory {
                            SubCategoryLine = "buketi_iz_roz",
                            SubCategoryName = "Букеты из Роз",
                            Category = category["Букеты"]
                        },
                        new SubCategory {
                            SubCategoryLine = "sredstva_zaschiti_rasteniy",
                            SubCategoryName = "Средства защиты растений",
                            Category = category["Удобрения"]
                        },
                        new SubCategory {
                            SubCategoryLine = "grunt",
                            SubCategoryName = "Грунт",
                            Category = category["Удобрения"]
                        },
                        new SubCategory {
                            SubCategoryLine = "yaschiki",
                            SubCategoryName = "Ящики",
                            Category = category["Изделия из дерева"]
                        },
                        new SubCategory {
                            SubCategoryLine = "dekorativnie_izdeliya",
                            SubCategoryName = "Декоративные изделия",
                            Category = category["Изделия из дерева"]
                        }
                    };

                    subCategory = new Dictionary<string, SubCategory>();
                    foreach (SubCategory el in list)
                    {
                        subCategory.Add(el.SubCategoryName, el);
                    }
                }
                return subCategory;
            }
        }

        private static Dictionary<string, UnderSubCategory> underSubCategory;
        public static Dictionary<string, UnderSubCategory> UnderSubCategories
        {
            get
            {
                if (underSubCategory == null)
                {
                    var list = new UnderSubCategory[]
                    {
                        new UnderSubCategory {
                            UnderSubCategoryLine = "rozi",
                            UnderSubCategoryName = "Розы",
                            SubCategory = subCategory["Живые цветы"]
                        },
                        new UnderSubCategory {
                            UnderSubCategoryLine = "tulpani",
                            UnderSubCategoryName = "Тюльпаны",
                            SubCategory = subCategory["Живые цветы"]
                        },
                        new UnderSubCategory {
                            UnderSubCategoryLine = "hrizantemi",
                            UnderSubCategoryName = "Хризантемы",
                            SubCategory = subCategory["Живые цветы"]
                        },
                        new UnderSubCategory {
                            UnderSubCategoryLine = "venki_isk",
                            UnderSubCategoryName = "Венки искусственные",
                            SubCategory = subCategory["Искусственные цветы"]
                        },
                        new UnderSubCategory {
                            UnderSubCategoryLine = "rozi_isk",
                            UnderSubCategoryName = "Розы искусственные",
                            SubCategory = subCategory["Искусственные цветы"]
                        },
                        new UnderSubCategory {
                            UnderSubCategoryLine = "shari_lateks_bez_obr",
                            UnderSubCategoryName = "Шары латексные без обработки",
                            SubCategory = subCategory["Шары из латекса"]
                        },
                        new UnderSubCategory {
                            UnderSubCategoryLine = "shari_lateks_happy_birthday",
                            UnderSubCategoryName = "С днем рождения!",
                            SubCategory = subCategory["Шары из латекса"]
                        },
                        new UnderSubCategory {
                            UnderSubCategoryLine = "shari_lateks_prikol",
                            UnderSubCategoryName = "Прикольные",
                            SubCategory = subCategory["Шары из латекса"]
                        },
                        new UnderSubCategory {
                            UnderSubCategoryLine = "shari_folgirovanie_cifri",
                            UnderSubCategoryName = "Шары цифры",
                            SubCategory = subCategory["Фольгированные шары"]
                        },
                        new UnderSubCategory {
                            UnderSubCategoryLine = "shari_folgirovanie_hearts",
                            UnderSubCategoryName = "Шары в форме сердца",
                            SubCategory = subCategory["Фольгированные шары"]
                        },
                        new UnderSubCategory {
                            UnderSubCategoryLine = "shari_folgirovanie_stars",
                            UnderSubCategoryName = "Шары в форме звезды",
                            SubCategory = subCategory["Фольгированные шары"]
                        },
                        new UnderSubCategory {
                            UnderSubCategoryLine = "buketi_romashki",
                            UnderSubCategoryName = "Букеты из Ромашек",
                            SubCategory = subCategory["Букеты из цветов"]
                        },
                        new UnderSubCategory {
                            UnderSubCategoryLine = "buketi_hrizantem",
                            UnderSubCategoryName = "Букеты из Хризантем",
                            SubCategory = subCategory["Букеты из цветов"]
                        },
                        new UnderSubCategory {
                            UnderSubCategoryLine = "buketi_suhocvetov",
                            UnderSubCategoryName = "Букеты из Сухоцветов",
                            SubCategory = subCategory["Букеты из цветов"]
                        },
                        new UnderSubCategory {
                            UnderSubCategoryLine = "buketi_tulpani",
                            UnderSubCategoryName = "Букеты из Тюльпанов",
                            SubCategory = subCategory["Букеты из цветов"]
                        },
                        new UnderSubCategory {
                            UnderSubCategoryLine = "buketi_miks",
                            UnderSubCategoryName = "Микс букеты",
                            SubCategory = subCategory["Букеты из цветов"]
                        },
                        new UnderSubCategory {
                            UnderSubCategoryLine = "buketi_roz_11",
                            UnderSubCategoryName = "11 Роз",
                            SubCategory = subCategory["Букеты из Роз"]
                        },
                        new UnderSubCategory {
                            UnderSubCategoryLine = "buketi_roz_101",
                            UnderSubCategoryName = "101 Роза",
                            SubCategory = subCategory["Букеты из Роз"]
                        },
                        new UnderSubCategory {
                            UnderSubCategoryLine = "bolshie_plastik_gorshki",
                            UnderSubCategoryName = "Большие пластиковые горшки для цветов",
                            SubCategory = subCategory["Горшки для цветов пластиковые"]
                        },
                        new UnderSubCategory {
                            UnderSubCategoryLine = "balkonie_plastik_gorshki",
                            UnderSubCategoryName = "Балконные пластиковые горшки для цветов",
                            SubCategory = subCategory["Горшки для цветов пластиковые"]
                        },
                        new UnderSubCategory {
                            UnderSubCategoryLine = "podvesnie_plastik_gorshki",
                            UnderSubCategoryName = "Подвесные пластиковые горшки для цветов",
                            SubCategory = subCategory["Горшки для цветов пластиковые"]
                        },
                        new UnderSubCategory {
                            UnderSubCategoryLine = "bolshie_keramik_gorshki",
                            UnderSubCategoryName = "Большие керамические горшки для цветов",
                            SubCategory = subCategory["Горшки для цветов керамические"]
                        },
                        new UnderSubCategory {
                            UnderSubCategoryLine = "kvadrat_keramik_gorshki",
                            UnderSubCategoryName = "Квадратные керамические горшки для цветов",
                            SubCategory = subCategory["Горшки для цветов керамические"]
                        },
                        new UnderSubCategory {
                            UnderSubCategoryLine = "kruglie_keramik_gorshki",
                            UnderSubCategoryName = "Круглые керамические горшки для цветов",
                            SubCategory = subCategory["Горшки для цветов керамические"]
                        },
                        new UnderSubCategory {
                            UnderSubCategoryLine = "udobreniya_dlya_arhidet",
                            UnderSubCategoryName = "Удобрения для архидей",
                            SubCategory = subCategory["Средства защиты растений"]
                        },
                        new UnderSubCategory {
                            UnderSubCategoryLine = "zaschita_ot_vrediteley",
                            UnderSubCategoryName = "Защита от вредителей",
                            SubCategory = subCategory["Средства защиты растений"]
                        },
                        new UnderSubCategory {
                            UnderSubCategoryLine = "kuriniy_pomet",
                            UnderSubCategoryName = "Куриный помет",
                            SubCategory = subCategory["Грунт"]
                        },
                        new UnderSubCategory {
                            UnderSubCategoryLine = "grunt_flora",
                            UnderSubCategoryName = "Грунт флора",
                            SubCategory = subCategory["Грунт"]
                        },
                        new UnderSubCategory {
                            UnderSubCategoryLine = "yaschiki_dlya_cvetov",
                            UnderSubCategoryName = "Ящики для цветов",
                            SubCategory = subCategory["Ящики"]
                        },
                        new UnderSubCategory {
                            UnderSubCategoryLine = "ukrasheniya",
                            UnderSubCategoryName = "Украшения",
                            SubCategory = subCategory["Декоративные изделия"]
                        },
                         new UnderSubCategory {
                            UnderSubCategoryLine = "dekor_telega",
                            UnderSubCategoryName = "Декоративые телеги",
                            SubCategory = subCategory["Декоративные изделия"]
                        },
                          new UnderSubCategory {
                            UnderSubCategoryLine = "dekor_kolodec",
                            UnderSubCategoryName = "Декоративный колодец",
                            SubCategory = subCategory["Декоративные изделия"]
                        }
                    };

                    underSubCategory = new Dictionary<string, UnderSubCategory>();
                    foreach (UnderSubCategory el in list)
                    {
                        underSubCategory.Add(el.UnderSubCategoryName, el);
                    }
                }
                return underSubCategory;
            }
        }
    }
}
