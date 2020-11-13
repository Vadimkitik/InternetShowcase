using System.Collections.Generic;

namespace InternetShowcase.ViewModels
{
    public class CategoryView
    {
        public int Id { get; set; }
        public string Line { get; set; }

        public string Name { get; set; }
        public int Parent_Id { get; set; }

        public ICollection<ProductView> Products { get; set; }
    }
}
