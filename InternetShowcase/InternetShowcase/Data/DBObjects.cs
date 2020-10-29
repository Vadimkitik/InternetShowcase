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
                            CategoryLine = "iskusstvennie_cveti",
                            CategoryName = "Искусственные цветы",
                            Category = category["Цветы"]
                        },
                        new SubCategory {
                            CategoryLine = "jivie_cveti",
                            CategoryName = "Живые цветы",
                            Category = category["Цветы"]
                        },                        
                        new SubCategory {
                            CategoryLine = "gorshki_plastikovie",
                            CategoryName = "Горшки для цветов пластиковые",
                            Category = category["Горшки"]
                        },
                        new SubCategory {
                            CategoryLine = "gorshki_keramik",
                            CategoryName = "Горшки для цветов керамические",
                            Category = category["Горшки"]
                        },
                        new SubCategory {
                            CategoryLine = "shari_lateks",
                            CategoryName = "Шары из латекса",
                            Category = category["Шары"]
                        },
                        new SubCategory {
                            CategoryLine = "shari_folgirovanie",
                            CategoryName = "Фольгированные шары",
                            Category = category["Шары"]
                        },
                        new SubCategory {
                            CategoryLine = "buketi_iz_cvetov",
                            CategoryName = "Букеты из цветов",
                            Category = category["Букеты"]
                        },
                        new SubCategory {
                            CategoryLine = "buketi_iz_roz",
                            CategoryName = "Букеты из Роз",
                            Category = category["Букеты"]
                        },
                        new SubCategory {
                            CategoryLine = "sredstva_zaschiti_rasteniy",
                            CategoryName = "Средства защиты растений",
                            Category = category["Удобрения"]
                        },
                        new SubCategory {
                            CategoryLine = "grunt",
                            CategoryName = "Грунт",
                            Category = category["Удобрения"]
                        },
                        new SubCategory {
                            CategoryLine = "yaschiki",
                            CategoryName = "Ящики",
                            Category = category["Изделия из дерева"]
                        },
                        new SubCategory {
                            CategoryLine = "dekorativnie_izdeliya",
                            CategoryName = "Декоративные изделия",
                            Category = category["Изделия из дерева"]
                        }
                    };

                    subCategory = new Dictionary<string, SubCategory>();
                    foreach (SubCategory el in list)
                    {
                        subCategory.Add(el.CategoryName, el);
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
                            CategoryLine = "rozi",
                            CategoryName = "Розы",
                            SubCategory = subCategory["Живые цветы"]
                        },
                        new UnderSubCategory {
                            CategoryLine = "tulpani",
                            CategoryName = "Тюльпаны",
                            SubCategory = subCategory["Живые цветы"]
                        },
                        new UnderSubCategory {
                            CategoryLine = "hrizantemi",
                            CategoryName = "Хризантемы",
                            SubCategory = subCategory["Живые цветы"]
                        },
                        new UnderSubCategory {
                            CategoryLine = "venki_isk",
                            CategoryName = "Венки искусственные",
                            SubCategory = subCategory["Искусственные цветы"]
                        },
                        new UnderSubCategory {
                            CategoryLine = "rozi_isk",
                            CategoryName = "Розы искусственные",
                            SubCategory = subCategory["Искусственные цветы"]
                        },
                        new UnderSubCategory {
                            CategoryLine = "shari_lateks_bez_obr",
                            CategoryName = "Шары латексные без обработки",
                            SubCategory = subCategory["Шары из латекса"]
                        },
                        new UnderSubCategory {
                            CategoryLine = "shari_lateks_happy_birthday",
                            CategoryName = "С днем рождения!",
                            SubCategory = subCategory["Шары из латекса"]
                        },
                        new UnderSubCategory {
                            CategoryLine = "shari_lateks_prikol",
                            CategoryName = "Прикольные",
                            SubCategory = subCategory["Шары из латекса"]
                        },
                        new UnderSubCategory {
                            CategoryLine = "shari_folgirovanie_cifri",
                            CategoryName = "Шары цифры",
                            SubCategory = subCategory["Фольгированные шары"]
                        },
                        new UnderSubCategory {
                            CategoryLine = "shari_folgirovanie_hearts",
                            CategoryName = "Шары в форме сердца",
                            SubCategory = subCategory["Фольгированные шары"]
                        },
                        new UnderSubCategory {
                            CategoryLine = "shari_folgirovanie_stars",
                            CategoryName = "Шары в форме звезды",
                            SubCategory = subCategory["Фольгированные шары"]
                        },
                        new UnderSubCategory {
                            CategoryLine = "buketi_romashki",
                            CategoryName = "Букеты из Ромашек",
                            SubCategory = subCategory["Букеты из цветов"]
                        },
                        new UnderSubCategory {
                            CategoryLine = "buketi_hrizantem",
                            CategoryName = "Букеты из Хризантем",
                            SubCategory = subCategory["Букеты из цветов"]
                        },
                        new UnderSubCategory {
                            CategoryLine = "buketi_suhocvetov",
                            CategoryName = "Букеты из Сухоцветов",
                            SubCategory = subCategory["Букеты из цветов"]
                        },
                        new UnderSubCategory {
                            CategoryLine = "buketi_tulpani",
                            CategoryName = "Букеты из Тюльпанов",
                            SubCategory = subCategory["Букеты из цветов"]
                        },
                        new UnderSubCategory {
                            CategoryLine = "buketi_miks",
                            CategoryName = "Микс букеты",
                            SubCategory = subCategory["Букеты из цветов"]
                        },
                        new UnderSubCategory {
                            CategoryLine = "buketi_roz_11",
                            CategoryName = "11 Роз",
                            SubCategory = subCategory["Букеты из Роз"]
                        },
                        new UnderSubCategory {
                            CategoryLine = "buketi_roz_101",
                            CategoryName = "101 Роза",
                            SubCategory = subCategory["Букеты из Роз"]
                        },
                        new UnderSubCategory {
                            CategoryLine = "bolshie_plastik_gorshki",
                            CategoryName = "Большие пластиковые горшки для цветов",
                            SubCategory = subCategory["Горшки для цветов пластиковые"]
                        },
                        new UnderSubCategory {
                            CategoryLine = "balkonie_plastik_gorshki",
                            CategoryName = "Балконные пластиковые горшки для цветов",
                            SubCategory = subCategory["Горшки для цветов пластиковые"]
                        },
                        new UnderSubCategory {
                            CategoryLine = "podvesnie_plastik_gorshki",
                            CategoryName = "Подвесные пластиковые горшки для цветов",
                            SubCategory = subCategory["Горшки для цветов пластиковые"]
                        },
                        new UnderSubCategory {
                            CategoryLine = "bolshie_keramik_gorshki",
                            CategoryName = "Большие керамические горшки для цветов",
                            SubCategory = subCategory["Горшки для цветов керамические"]
                        },
                        new UnderSubCategory {
                            CategoryLine = "kvadrat_keramik_gorshki",
                            CategoryName = "Квадратные керамические горшки для цветов",
                            SubCategory = subCategory["Горшки для цветов керамические"]
                        },
                        new UnderSubCategory {
                            CategoryLine = "kruglie_keramik_gorshki",
                            CategoryName = "Круглые керамические горшки для цветов",
                            SubCategory = subCategory["Горшки для цветов керамические"]
                        },
                        new UnderSubCategory {
                            CategoryLine = "udobreniya_dlya_arhidet",
                            CategoryName = "Удобрения для архидей",
                            SubCategory = subCategory["Средства защиты растений"]
                        },
                        new UnderSubCategory {
                            CategoryLine = "zaschita_ot_vrediteley",
                            CategoryName = "Защита от вредителей",
                            SubCategory = subCategory["Средства защиты растений"]
                        },
                        new UnderSubCategory {
                            CategoryLine = "kuriniy_pomet",
                            CategoryName = "Куриный помет",
                            SubCategory = subCategory["Грунт"]
                        },
                        new UnderSubCategory {
                            CategoryLine = "grunt_flora",
                            CategoryName = "Грунт флора",
                            SubCategory = subCategory["Грунт"]
                        },
                        new UnderSubCategory {
                            CategoryLine = "yaschiki_dlya_cvetov",
                            CategoryName = "Ящики для цветов",
                            SubCategory = subCategory["Ящики"]
                        },
                        new UnderSubCategory {
                            CategoryLine = "ukrasheniya",
                            CategoryName = "Украшения",
                            SubCategory = subCategory["Декоративные изделия"]
                        },
                         new UnderSubCategory {
                            CategoryLine = "dekor_telega",
                            CategoryName = "Декоративые телеги",
                            SubCategory = subCategory["Декоративные изделия"]
                        },
                          new UnderSubCategory {
                            CategoryLine = "dekor_kolodec",
                            CategoryName = "Декоративный колодец",
                            SubCategory = subCategory["Декоративные изделия"]
                        }
                    };

                    underSubCategory = new Dictionary<string, UnderSubCategory>();
                    foreach (UnderSubCategory el in list)
                    {
                        underSubCategory.Add(el.CategoryName, el);
                    }
                }
                return underSubCategory;
            }
        }
    }
}
