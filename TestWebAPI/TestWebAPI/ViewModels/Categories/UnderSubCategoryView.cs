using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestWebAPI.ViewModels
{
    public class UnderSubCategoryView
    {
        public int id { get; set; }
        public string underSubCategoryLine { get; set; }
        public string underSubCategoryName { get; set; }
        public int subCategoryID { get; set; }
        public SubCategoryView SubCategory { get; set; }

        public ICollection<ProductView> Products { get; set; }
    }
}
