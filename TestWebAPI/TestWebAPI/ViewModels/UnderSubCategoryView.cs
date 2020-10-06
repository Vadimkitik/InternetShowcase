using System.Collections.Generic;

namespace TestWebAPI.ViewModels
{
    public class UnderSubCategoryView
    {
        public int Id { get; set; }
       
        public string UnderSubCategoryLine { get; set; }
        
        public string UnderSubCategoryName { get; set; }

        public int SubCategoryID { get; set; }
       
        public CategoryView SubCategory { get; set; }

        public ICollection<ProductView> Products { get; set; }
    }
}
