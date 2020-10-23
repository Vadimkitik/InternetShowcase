using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace InternetShowcase.Data.Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string ProductLine { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public double Price { get; set; }

        public double? OldPrice { get; set; }
        [Required]
        public string ImageUrl { get; set; }
        [Required]
        public bool IsFavourite { get; set; }
        [Required]
        public bool Available { get; set; }

        [Required]
        public int CategoryID { get; set; }
        [ForeignKey("CategoryID")]
        public Category Category { get; set; }

        public int SubCategoryID { get; set; }
        [ForeignKey("SubCategoryID")]
        public SubCategory SubCategory { get; set; }

        public int UnderSubCategoryID { get; set; }
        [ForeignKey("UnderSubCategoryID")]
        public UnderSubCategory UnderSubCategory { get; set; }
    }
}
