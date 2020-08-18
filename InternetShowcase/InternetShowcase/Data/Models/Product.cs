using System.ComponentModel.DataAnnotations;

namespace InternetShowcase.Data.Models
{
    public class Product
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Type { get; set; }

        public string Description { get; set; }
        [Required]
        public double Price { get; set; }

        public double? OldPrice { get; set; }
        [Required]
        public string ImageUrl { get; set; }
    }
}
