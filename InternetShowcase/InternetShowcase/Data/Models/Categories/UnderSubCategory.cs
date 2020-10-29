using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace InternetShowcase.Data.Models
{
    public class UnderSubCategory
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string CategoryLine { get; set; }
        [Required]
        public string CategoryName { get; set; }

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
