using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestWebAPI.ViewModels
{
    public class SubCategoryView
    {
        public int id { get; set; }
        public string subCategoryLine { get; set; }
        public string subCategoryName { get; set; }
        public int categoryID { get; set; }
        public CategoryView Category { get; set; }

        public ICollection<ProductView> Products { get; set; }
        public ICollection<UnderSubCategoryView>? UnderSubCategories { get; set; }
    }
}
