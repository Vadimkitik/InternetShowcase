using InternetShowcase.Data.interfaces;
using InternetShowcase.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InternetShowcase.Data.mocks
{
    public class MockProducts : IAllProducts
    {
        private readonly IProductsCategory _categoryProducts = new MockCategory();

        public IEnumerable<Product> Products {
            get
            {
                return new List<Product>
                {
                    new Product
                        {
                            name = "Цветок №1",
                            price = 44,
                            oldPrice = 22,
                            description = "Что то про этот цветок",
                            imageUrl = $"assets/img/products/product-1.jpg",
                            available = true,
                            isFavourite = true,
                            Category = _categoryProducts.AllCategories.First()
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
                            Category = _categoryProducts.AllCategories.Last()
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
                            Category = _categoryProducts.AllCategories.First()
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
                            Category = _categoryProducts.AllCategories.Last()
                        }
                };
            }
        }
        public IEnumerable<Product> getFavProducts { get => throw new NotImplementedException(); set => throw new NotImplementedException(); }

        public Product getObjproduct(int productId)
        {
            throw new NotImplementedException();
        }
    }
}
