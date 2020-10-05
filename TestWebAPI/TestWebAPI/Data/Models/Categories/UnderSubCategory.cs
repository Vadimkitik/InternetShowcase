using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TestWebAPI.Data.Models
{
    public class UnderSubCategory
    {
        [Key]
        public int id { get; set; }
        [Required]
        public string underSubCategoryLine { get; set; }
        [Required]
        public string underSubCategoryName { get; set; }
        public int subCategoryID { get; set; }
        [ForeignKey("subCategoryID")]
        public SubCategory SubCategory { get; set; }

        public ICollection<Product> Products { get; set; }
        //public UnderSubCategory()
        //{
        //    Products = new List<Product>();
        //}
    }
}
