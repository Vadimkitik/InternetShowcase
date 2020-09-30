using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TestWebAPI.Data.Models
{
    public class SubCategory
    {
        [Key]
        public int id { get; set; }
        [Required]
        public string subCategoryLine { get; set; }
        [Required]
        public string subCategoryName { get; set; }
        public int categoryID { get; set; }
        [ForeignKey("categoryID")]
        public Category Category { get; set; }

        public ICollection<Product> Products { get; set; }
        public ICollection<UnderSubCategory>? UnderSubCategories { get; set; }
        public SubCategory()
        {
            Products = new List<Product>();
            UnderSubCategories = new List<UnderSubCategory>();
        }
    }
}
