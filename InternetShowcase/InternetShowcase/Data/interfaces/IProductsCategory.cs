using InternetShowcase.Data.Models;
using System.Collections.Generic;

namespace InternetShowcase.Data.interfaces {
    public interface IProductsCategory
    {
        IEnumerable<Category> AllCategories { get; }
    }
}