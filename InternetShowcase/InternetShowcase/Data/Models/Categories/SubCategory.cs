using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace InternetShowcase.Data.Models
{
    public class SubCategory
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string CategoryLine { get; set; }
        [Required]
        public string CategoryName { get; set; }

        [Required]
        public int CategoryID { get; set; }
        [ForeignKey("CategoryID")]
        public Category Category { get; set; }

        public ICollection<Product> Products { get; set; }
        public ICollection<UnderSubCategory> UnderSubCategories { get; set; }

        public SubCategory()
        {
            Products = new List<Product>();
            UnderSubCategories = new List<UnderSubCategory>();
        }
    }
}
