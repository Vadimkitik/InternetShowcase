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
                        new Category { categoryLine = "shari", categoryName = "Шары" },
                        new Category { categoryLine = "udobrenie", categoryName = "Удобрения" },
                        new Category { categoryLine = "buketi", categoryName = "Букеты" },
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
                            subCategoryLine = "jivie_cveti",
                            subCategoryName = "Живые цветы",
                            Category = Categories["Цветы"]
                        },
                        new SubCategory { 
                            subCategoryLine = "iskusstvennie_cveti", 
                            subCategoryName = "Искусственные цветы",
                            Category = Categories["Цветы"] 
                        },
                        new SubCategory {
                            subCategoryLine = "gorshki_plastikovie", 
                            subCategoryName = "Горшки для цветов пластиковые", 
                            Category = Categories["Горшки"]
                        },
                        new SubCategory { 
                            subCategoryLine = "gorshki_keramicheskie", 
                            subCategoryName = "Горшки для цветов керамические",
                            Category = Categories["Горшки"] 
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
