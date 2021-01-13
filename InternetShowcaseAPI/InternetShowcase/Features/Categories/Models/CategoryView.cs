using InternetShowcase.Features.Products.Models;
using System.Collections.Generic;

namespace InternetShowcase.Features.Categories.Models
{
    public class CategoryView
    {
        public int Id { get; set; }
        public string Line { get; set; }

        public string Name { get; set; }
        public string Parent_Id { get; set; }
        public ICollection<CategoryView> Children { get; set; }

        public ICollection<ProductView> Products { get; set; }
    }
}
