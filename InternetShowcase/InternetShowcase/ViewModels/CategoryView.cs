using System.Collections.Generic;

namespace InternetShowcase.ViewModels
{
    public class CategoryView
    {
        public int id { get; set; }
        public string categoryLine { get; set; }

        public string categoryName { get; set; }

        public ICollection<ProductView> Products { get; set; }
      
    }
}
