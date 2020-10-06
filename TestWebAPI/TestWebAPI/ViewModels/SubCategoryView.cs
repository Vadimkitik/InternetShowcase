using System.Collections.Generic;

namespace TestWebAPI.ViewModels
{
    public class SubCategoryView
    {
        
        public int Id { get; set; }
        
        public string SubCategoryLine { get; set; }
       
        public string SubCategoryName { get; set; }

        
        public int CategoryID { get; set; }
        
        public CategoryView Category { get; set; }

        public ICollection<ProductView> Products { get; set; }
        public ICollection<UnderSubCategoryView> UnderSubCategories { get; set; }
    }
}
