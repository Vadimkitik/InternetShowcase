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
                User user = new User { Email = "alleutina@gmail.com", Password = "1z2x3cQQ", Name = "Alla", Role = "Admin" };
                context.Users.Add(user);
                context.SaveChanges();
            }

            if (!context.Categories.Any()){
                context.Categories.AddRange(Categories.Select(c => c.Value));
                context.SaveChanges();
            }    

            if (!context.Products.Any()){
                for(int i=0; i<=10; i++)
                {
                    var rnd = new Random();
                    var priceRnd = rnd.Next(4, 15);
                    var oldPriceRnd = rnd.Next(15, 30);
                    var imageRnd = rnd.Next(1,4);
                    var catRnd = rnd.Next(0, catList.Length);
                    var Cata = category[catList[catRnd]];
                    var productName = catList[catRnd];
                    var descriptionString = $"Товар: {productName} находится в " +
                                           $"{Cata.categoryName} ";
                   
                    var product = new Product
                    {
                        name = productName,
                        productLine = "cvetok_" + i,
                        price = priceRnd,
                        oldPrice = oldPriceRnd,
                        description = descriptionString,
                        imageUrl = $"https://localhost:5001/Resources/images/product-{imageRnd}.jpg",
                        available = true,
                        isFavourite = true,
                        Category = Cata
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
                        new Category { 
                            categoryLine = "cveti", 
                            categoryName = "Цветы" , 
                            parentId = 0
                        },
                        new Category { 
                            categoryLine = "buketi", 
                            categoryName = "Букеты", 
                            parentId = 0
                        },
                        new Category { 
                            categoryLine = "shari", 
                            categoryName = "Шары", 
                            parentId = 0
                        },
                        new Category { 
                            categoryLine = "udobrenie", 
                            categoryName = "Удобрения", 
                            parentId = 0 
                        },                        
                        new Category { 
                            categoryLine = "gorshki", 
                            categoryName = "Горшки", 
                            parentId = 0 
                        },
                        new Category { 
                            categoryLine = "izdelia_iz_dereva", 
                            categoryName = "Изделия из дерева",
                            parentId = 0
                        },
                        new Category {
                            categoryLine = "iskusstvennie_cveti",
                            categoryName = "Искусственные цветы",
                            parentId = 1
                        },
                        new Category {
                            categoryLine = "jivie_cveti",
                            categoryName = "Живые цветы",
                            parentId = 1
                        },

                        new Category {
                            categoryLine = "gorshki_plastikovie",
                            categoryName = "Горшки для цветов пластиковые",
                            parentId = 1
                        },
                        new Category {
                            categoryLine = "gorshki_keramik",
                            categoryName = "Горшки для цветов керамические",
                            parentId = 1
                        },
                        new Category {
                            categoryLine = "shari_lateks",
                            categoryName = "Шары из латекса",
                            parentId = 1
                        },
                        new Category {
                            categoryLine = "shari_folgirovanie",
                            categoryName = "Фольгированные шары",
                            parentId = 1
                        },
                        new Category {
                            categoryLine = "buketi_iz_cvetov",
                            categoryName = "Букеты из цветов",
                            parentId = 1
                        },
                        new Category {
                            categoryLine = "buketi_iz_roz",
                            categoryName = "Букеты из Роз",
                            parentId = 1
                        },
                        new Category {
                            categoryLine = "sredstva_zaschiti_rasteniy",
                            categoryName = "Средства защиты растений",
                            parentId = 1
                        },
                        new Category {
                            categoryLine = "grunt",
                            categoryName = "Грунт",
                            parentId = 1
                        },
                        new Category {
                            categoryLine = "yaschiki",
                            categoryName = "Ящики",
                            parentId = 1
                        },
                        new Category {
                            categoryLine = "dekorativnie_izdeliya",
                            categoryName = "Декоративные изделия",
                            parentId = 1
                        },
                        new Category {
                            categoryLine = "rozi",
                            categoryName = "Розы",
                            parentId = 2
                        },
                        new Category {
                            categoryLine = "tulpani",
                            categoryName = "Тюльпаны",
                            parentId = 2
                        },
                        new Category {
                            categoryLine = "hrizantemi",
                            categoryName = "Хризантемы",
                            parentId = 2
                        },
                        new Category {
                            categoryLine = "venki_isk",
                            categoryName = "Венки искусственные",
                            parentId = 2
                        },
                        new Category {
                            categoryLine = "rozi_isk",
                            categoryName = "Розы искусственные",
                            parentId = 2
                        },
                        new Category {
                            categoryLine = "shari_lateks_bez_obr",
                            categoryName = "Шары латексные без обработки",
                            parentId = 2
                        },
                        new Category {
                            categoryLine = "shari_lateks_happy_birthday",
                            categoryName = "С днем рождения!",
                            parentId = 2
                        },
                        new Category {
                            categoryLine = "shari_lateks_prikol",
                            categoryName = "Прикольные",
                            parentId = 2
                        },
                        new Category {
                            categoryLine = "shari_folgirovanie_cifri",
                            categoryName = "Шары цифры",
                            parentId = 2
                        },
                        new Category {
                            categoryLine = "shari_folgirovanie_hearts",
                            categoryName = "Шары в форме сердца",
                            parentId = 2
                        },
                        new Category {
                            categoryLine = "shari_folgirovanie_stars",
                            categoryName = "Шары в форме звезды",
                            parentId = 2
                        },
                        new Category {
                            categoryLine = "buketi_romashki",
                            categoryName = "Букеты из Ромашек",
                            parentId = 2
                        },
                        new Category {
                            categoryLine = "buketi_hrizantem",
                            categoryName = "Букеты из Хризантем",
                            parentId = 2
                        },
                        new Category {
                            categoryLine = "buketi_suhocvetov",
                            categoryName = "Букеты из Сухоцветов",
                            parentId = 2
                        },
                        new Category {
                            categoryLine = "buketi_tulpani",
                            categoryName = "Букеты из Тюльпанов",
                            parentId = 1
                        },
                        new Category {
                            categoryLine = "buketi_miks",
                            categoryName = "Микс букеты",
                            parentId = 2
                        },
                        new Category {
                            categoryLine = "buketi_roz_11",
                            categoryName = "11 Роз",
                            parentId = 2
                        },
                        new Category {
                            categoryLine = "buketi_roz_101",
                            categoryName = "101 Роза",
                            parentId = 2
                        },
                        new Category {
                            categoryLine = "bolshie_plastik_gorshki",
                            categoryName = "Большие пластиковые горшки для цветов",
                            parentId = 2
                        },
                        new Category {
                            categoryLine = "balkonie_plastik_gorshki",
                            categoryName = "Балконные пластиковые горшки для цветов",
                            parentId = 2
                        },
                        new Category {
                            categoryLine = "podvesnie_plastik_gorshki",
                            categoryName = "Подвесные пластиковые горшки для цветов",
                            parentId = 2
                        },
                        new Category {
                            categoryLine = "bolshie_keramik_gorshki",
                            categoryName = "Большие керамические горшки для цветов",
                            parentId = 2
                        },
                        new Category {
                            categoryLine = "kvadrat_keramik_gorshki",
                            categoryName = "Квадратные керамические горшки для цветов",
                            parentId = 2
                        },
                        new Category {
                            categoryLine = "kruglie_keramik_gorshki",
                            categoryName = "Круглые керамические горшки для цветов",
                            parentId = 2
                        },
                        new Category {
                            categoryLine = "udobreniya_dlya_arhidet",
                            categoryName = "Удобрения для архидей",
                            parentId = 2
                        },
                        new Category {
                            categoryLine = "zaschita_ot_vrediteley",
                            categoryName = "Защита от вредителей",
                            parentId = 2
                        },
                        new Category {
                            categoryLine = "ukrasheniya",
                            categoryName = "Украшения",
                            parentId = 2
                        },
                        new Category {
                            categoryLine = "yaschiki_dlya_cvetov",
                            categoryName = "Ящики для цветов",
                            parentId = 2
                        },
                        new Category {
                            categoryLine = "kuriniy_pomet",
                            categoryName = "Куриный помет",
                            parentId = 2
                        },
                        new Category {
                            categoryLine = "grunt_flora",
                            categoryName = "Грунт флора",
                            parentId = 2
                        },
                         new Category {
                            categoryLine = "dekor_telega",
                            categoryName = "Декоративые телеги",
                            parentId = 2
                        },
                          new Category {
                            categoryLine = "dekor_kolodec",
                            categoryName = "Декоративный колодец",
                            parentId = 2
                        }
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
