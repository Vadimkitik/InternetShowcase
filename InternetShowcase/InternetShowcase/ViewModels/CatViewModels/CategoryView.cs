using System.Collections.Generic;

namespace InternetShowcase.ViewModels
{
    public class CategoryView
    {
        public int Id { get; set; }
        public string CategoryLine { get; set; }

        public string CategoryName { get; set; }

        public ICollection<ProductView> Products { get; set; }
        public ICollection<SubCategoryView> SubCategories { get; set; }
    }
}
