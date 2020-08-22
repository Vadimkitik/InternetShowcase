using System.ComponentModel.DataAnnotations;

namespace InternetShowcase.Data.Models
{
    public class Product
    {
        public int id { get; set; }
        [Required]
        public string name { get; set; }  
        [Required]
        public string description { get; set; }
        [Required]
        public double price { get; set; }

        public double? oldPrice { get; set; }
        [Required]
        public string imageUrl { get; set; }

        public bool isFavourite { get; set; }

        public bool available { get; set; }
        [Required]
        public int categoryID { get; set; }

        public virtual Category Category { get; set; }
    }
}
