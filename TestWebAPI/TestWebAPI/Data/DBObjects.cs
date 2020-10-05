using System;
using System.Collections.Generic;
using System.Linq;
using TestWebAPI.Data.Models;

namespace TestWebAPI.Data
{
    public class DBObjects
    {
        public static void initial(TestDbContext context)
        {
            if (!context.Users.Any())
            {
                User user = new User { Email = "alleutina@gmail.com", Password = "123321QQ", Name = "Alla", Role = "Admin" };
                context.Users.Add(user);
                context.SaveChanges();
            }

            if (!context.Categories.Any()){
                context.Categories.AddRange(Categories.Select(c => c.Value));
                context.SaveChanges();
            }
                

            if (!context.SubCategories.Any()){
                context.SubCategories.AddRange(SubCategories.Select(c => c.Value));
                context.SaveChanges();
            }
                

            if (!context.UnderSubCategories.Any()){
                context.UnderSubCategories.AddRange(UnderSubCategories.Select(c => c.Value));
                context.SaveChanges();
            }  

            if (!context.Products.Any()){
                for(int i=0; i<=10; i++)
                {
                    var rnd = new Random();
                    var priceRnd = rnd.Next(4, 15);
                    var oldPriceRnd = rnd.Next(15, 30);
                    var imageRnd = rnd.Next(1,4);
                    var underSubCatRnd = rnd.Next(0, underSubCatList.Length);
                    var underSubCata = underSubCategory[underSubCatList[underSubCatRnd]];
                    var subCata = underSubCategory[underSubCatList[underSubCatRnd]].SubCategory;
                    var Cata = underSubCategory[underSubCatList[underSubCatRnd]].SubCategory.Category;
                    var productName = underSubCatList[underSubCatRnd];
                    var descriptionString = $"Товар: {productName} находится в " +
                                           $"{Cata.categoryName} -> " +
                                           $"{subCata.subCategoryName} -> " +
                                           $"{underSubCata.underSubCategoryName} :)";
                   
                    var product = new Product
                    {
                        UnderSubCategory =  underSubCata,
                        SubCategory = subCata,
                        Category = Cata,
                        name = productName,
                        productLine = "cvetok_" + i,
                        price = priceRnd,
                        oldPrice = oldPriceRnd,
                        description = descriptionString,
                        imageUrl = $"https://localhost:5001/Resources/images/product-{imageRnd}.jpg",
                        available = true,
                        isFavourite = true
                    };
                    context.Add(product);
                    context.SaveChanges();
                }
                
            }
        }
        
        private static string[] catList;
        private static Dictionary<string, Category> category;
        public static Dictionary<string, Category> Categories
        {
            get
            {
                if (category == null)
                {
                    var list = new Category[]
                    {
                        new Category { categoryLine = "cveti", categoryName = "Цветы" },
                        new Category { categoryLine = "buketi", categoryName = "Букеты" },
                        new Category { categoryLine = "shari", categoryName = "Шары" },
                        new Category { categoryLine = "udobrenie", categoryName = "Удобрения" },                        
                        new Category { categoryLine = "gorshki", categoryName = "Горшки" },
                        new Category { categoryLine = "izdelia_iz_dereva", categoryName = "Изделия из дерева" }
                    };

                    category = new Dictionary<string, Category>();
                    foreach (Category el in list)
                    {
                        category.Add(el.categoryName, el);
                        catList = CreateArrString(el.categoryName, catList);
                    }
                }
                return category;
            }
        }

        private static string[] subCatList ;
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
                            subCategoryLine = "iskusstvennie_cveti", 
                            subCategoryName = "Искусственные цветы",
                            Category = Categories["Цветы"] 
                        },
                        new SubCategory { 
                            subCategoryLine = "jivie_cveti",
                            subCategoryName = "Живые цветы",
                            Category = Categories["Цветы"]
                        },
                        
                        new SubCategory {
                            subCategoryLine = "gorshki_plastikovie", 
                            subCategoryName = "Горшки для цветов пластиковые", 
                            Category = Categories["Горшки"]
                        },
                        new SubCategory {
                            subCategoryLine = "gorshki_keramik",
                            subCategoryName = "Горшки для цветов керамические",
                            Category = Categories["Горшки"]
                        },
                        new SubCategory {
                            subCategoryLine = "shari_lateks", 
                            subCategoryName = "Шары из латекса", 
                            Category = Categories["Шары"]
                        },
                        new SubCategory {
                            subCategoryLine = "shari_folgirovanie", 
                            subCategoryName = "Фольгированные шары", 
                            Category = Categories["Шары"]
                        },
                        new SubCategory {
                            subCategoryLine = "buketi_iz_cvetov", 
                            subCategoryName = "Букеты из цветов", 
                            Category = Categories["Букеты"]
                        },
                        new SubCategory {
                            subCategoryLine = "buketi_iz_roz", 
                            subCategoryName = "Букеты из Роз", 
                            Category = Categories["Букеты"]
                        },
                        new SubCategory { 
                            subCategoryLine = "sredstva_zaschiti_rasteniy", 
                            subCategoryName = "Средства защиты растений",
                            Category = Categories["Удобрения"] 
                        },
                        new SubCategory {
                            subCategoryLine = "grunt",
                            subCategoryName = "Грунт",
                            Category = Categories["Удобрения"]
                        },
                        new SubCategory { 
                            subCategoryLine = "yaschiki",
                            subCategoryName = "Ящики", 
                            Category = Categories["Изделия из дерева"]
                        },
                        new SubCategory { 
                            subCategoryLine = "dekorativnie_izdeliya",
                            subCategoryName = "Декоративные изделия",
                            Category = Categories["Изделия из дерева"]
                        }
                    };

                    subCategory = new Dictionary<string, SubCategory>();
                    foreach (SubCategory el in list)
                    {
                        subCategory.Add(el.subCategoryName, el);
                        subCatList = CreateArrString(el.subCategoryName, subCatList);
                    }
                }
                return subCategory;
            }
        }

        private static string[] underSubCatList;
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
                            underSubCategoryLine = "rozi", 
                            underSubCategoryName = "Розы", 
                            SubCategory = SubCategories["Живые цветы"]
                        },
                        new UnderSubCategory { 
                            underSubCategoryLine = "tulpani", 
                            underSubCategoryName = "Тюльпаны", 
                            SubCategory = SubCategories["Живые цветы"]
                        },
                        new UnderSubCategory { 
                            underSubCategoryLine = "hrizantemi", 
                            underSubCategoryName = "Хризантемы", 
                            SubCategory = SubCategories["Живые цветы"]
                        },                        
                        new UnderSubCategory { 
                            underSubCategoryLine = "venki_isk", 
                            underSubCategoryName = "Венки искусственные", 
                            SubCategory = SubCategories["Искусственные цветы"] 
                        },
                        new UnderSubCategory { 
                            underSubCategoryLine = "rozi_isk", 
                            underSubCategoryName = "Розы искусственные", 
                            SubCategory = SubCategories["Искусственные цветы"] 
                        },
                        new UnderSubCategory { 
                            underSubCategoryLine = "shari_lateks_bez_obr", 
                            underSubCategoryName = "Шары латексные без обработки", 
                            SubCategory = SubCategories["Шары из латекса"] 
                        },
                        new UnderSubCategory { 
                            underSubCategoryLine = "shari_lateks_happy_birthday", 
                            underSubCategoryName = "С днем рождения!", 
                            SubCategory = SubCategories["Шары из латекса"] 
                        },
                        new UnderSubCategory { 
                            underSubCategoryLine = "shari_lateks_prikol", 
                            underSubCategoryName = "Прикольные", 
                            SubCategory = SubCategories["Шары из латекса"] 
                        },
                        new UnderSubCategory { 
                            underSubCategoryLine = "shari_folgirovanie_cifri", 
                            underSubCategoryName = "Шары цифры", 
                            SubCategory = SubCategories["Фольгированные шары"] 
                        },
                        new UnderSubCategory { 
                            underSubCategoryLine = "shari_folgirovanie_hearts", 
                            underSubCategoryName = "Шары в форме сердца", 
                            SubCategory = SubCategories["Фольгированные шары"] 
                        },
                        new UnderSubCategory { 
                            underSubCategoryLine = "shari_folgirovanie_stars", 
                            underSubCategoryName = "Шары в форме звезды", 
                            SubCategory = SubCategories["Фольгированные шары"] 
                        },
                        new UnderSubCategory { 
                            underSubCategoryLine = "buketi_romashki", 
                            underSubCategoryName = "Букеты из Ромашек", 
                            SubCategory = SubCategories["Букеты из цветов"] 
                        },
                        new UnderSubCategory { 
                            underSubCategoryLine = "buketi_hrizantem", 
                            underSubCategoryName = "Букеты из Хризантем", 
                            SubCategory = SubCategories["Букеты из цветов"] 
                        },
                        new UnderSubCategory { 
                            underSubCategoryLine = "buketi_suhocvetov", 
                            underSubCategoryName = "Букеты из Сухоцветов", 
                            SubCategory = SubCategories["Букеты из цветов"] 
                        },
                        new UnderSubCategory { 
                            underSubCategoryLine = "buketi_tulpani", 
                            underSubCategoryName = "Букеты из Тюльпанов", 
                            SubCategory = SubCategories["Букеты из цветов"] 
                        },
                        new UnderSubCategory { 
                            underSubCategoryLine = "buketi_miks", 
                            underSubCategoryName = "Микс букеты", 
                            SubCategory = SubCategories["Букеты из цветов"] 
                        },
                        new UnderSubCategory {
                            underSubCategoryLine = "buketi_roz_11",
                            underSubCategoryName = "11 Роз",
                            SubCategory = SubCategories["Букеты из Роз"]
                        },
                        new UnderSubCategory {
                            underSubCategoryLine = "buketi_roz_101",
                            underSubCategoryName = "101 Роза",
                            SubCategory = SubCategories["Букеты из Роз"]
                        },
                        new UnderSubCategory { 
                            underSubCategoryLine = "bolshie_plastik_gorshki", 
                            underSubCategoryName = "Большие пластиковые горшки для цветов", 
                            SubCategory = SubCategories["Горшки для цветов пластиковые"] 
                        },
                        new UnderSubCategory { 
                            underSubCategoryLine = "balkonie_plastik_gorshki", 
                            underSubCategoryName = "Балконные пластиковые горшки для цветов", 
                            SubCategory = SubCategories["Горшки для цветов пластиковые"] 
                        },
                        new UnderSubCategory { 
                            underSubCategoryLine = "podvesnie_plastik_gorshki", 
                            underSubCategoryName = "Подвесные пластиковые горшки для цветов", 
                            SubCategory = SubCategories["Горшки для цветов пластиковые"] 
                        },
                        new UnderSubCategory { 
                            underSubCategoryLine = "bolshie_keramik_gorshki", 
                            underSubCategoryName = "Большие керамические горшки для цветов", 
                            SubCategory = SubCategories["Горшки для цветов керамические"] 
                        },
                        new UnderSubCategory { 
                            underSubCategoryLine = "kvadrat_keramik_gorshki", 
                            underSubCategoryName = "Квадратные керамические горшки для цветов", 
                            SubCategory = SubCategories["Горшки для цветов керамические"]
                        },
                        new UnderSubCategory { 
                            underSubCategoryLine = "kruglie_keramik_gorshki", 
                            underSubCategoryName = "Круглые керамические горшки для цветов", 
                            SubCategory = SubCategories["Горшки для цветов керамические"] 
                        },
                        new UnderSubCategory {
                            underSubCategoryLine = "udobreniya_dlya_arhidet", 
                            underSubCategoryName = "Удобрения для архидей", 
                            SubCategory = SubCategories["Средства защиты растений"] 
                        },
                        new UnderSubCategory { 
                            underSubCategoryLine = "zaschita_ot_vrediteley",
                            underSubCategoryName = "Защита от вредителей", 
                            SubCategory = SubCategories["Средства защиты растений"] 
                        },                        
                        new UnderSubCategory { 
                            underSubCategoryLine = "ukrasheniya",
                            underSubCategoryName = "Украшения", 
                            SubCategory = SubCategories["Ящики"] 
                        },
                        new UnderSubCategory { 
                            underSubCategoryLine = "yaschiki_dlya_cvetov", 
                            underSubCategoryName = "Ящики для цветов", 
                            SubCategory = SubCategories["Ящики"] 
                        },
                        new UnderSubCategory {
                            underSubCategoryLine = "kuriniy_pomet",
                            underSubCategoryName = "Куриный помет",
                            SubCategory = SubCategories["Грунт"]
                        },
                        new UnderSubCategory {
                            underSubCategoryLine = "grunt_flora",
                            underSubCategoryName = "Грунт флора",
                            SubCategory = SubCategories["Грунт"]
                        },
                         new UnderSubCategory {
                            underSubCategoryLine = "dekor_telega",
                            underSubCategoryName = "Декоративые телеги",
                            SubCategory = SubCategories["Декоративные изделия"]
                        },
                          new UnderSubCategory {
                            underSubCategoryLine = "dekor_kolodec",
                            underSubCategoryName = "Декоративный колодец",
                            SubCategory = SubCategories["Декоративные изделия"]
                        }
                    };

                    underSubCategory = new Dictionary<string, UnderSubCategory>();
                    foreach (UnderSubCategory el in list)
                    {
                        underSubCategory.Add(el.underSubCategoryName, el);
                        underSubCatList = CreateArrString(el.underSubCategoryName, underSubCatList);
                    }
                }
                return underSubCategory;
            }
        }

        private static string[] CreateArrString(string s, string[] mainArray)
        {
            int count;
            string[] secondArray;

            if (mainArray == null)
            {
                count = 1;
                secondArray = new string[count];
            }
            else
            {
                count = mainArray.Length + 1;
                secondArray = new string[count];

                for (int i = 0; i < secondArray.Length - 1; i++)
                    secondArray[i] = mainArray[i];
            }            
            secondArray[count - 1] = s;
            mainArray = secondArray;
            return mainArray;
        }
    }
}
