using System.Collections.Generic;

namespace InternetShowcase.ViewModels
{
    public class SubCategoryView
    {
        
        public int Id { get; set; }
        public string CategoryLine { get; set; }

        public string CategoryName { get; set; }

        
        public int CategoryID { get; set; }
        
        public CategoryView Category { get; set; }

        public ICollection<ProductView> Products { get; set; }
        public ICollection<UnderSubCategoryView> UnderSubCategories { get; set; }
    }
}
