using System.Collections.Generic;

namespace InternetShowcase.ViewModels
{
    public class UnderSubCategoryView
    {
       public int Id { get; set; }
        public string CategoryLine { get; set; }

        public string CategoryName { get; set; }

        public int SubCategoryID { get; set; }
       
        public SubCategoryView SubCategory { get; set; }

        public ICollection<ProductView> Products { get; set; }
    }
}
