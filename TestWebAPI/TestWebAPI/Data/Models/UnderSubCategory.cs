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
        public int Id { get; set; }
        [Required]
        public string UnderSubCategoryLine { get; set; }
        [Required]
        public string UnderSubCategoryName { get; set; }

        public int SubCategoryID { get; set; }
        [ForeignKey("SubCategoryID")]
        public SubCategory SubCategory { get; set; }

        public ICollection<Product> Products { get; set; }

        public UnderSubCategory()
        {
            Products = new List<Product>();
        }
    }
}
