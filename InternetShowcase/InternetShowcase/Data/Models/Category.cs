using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace InternetShowcase.Data.Models
{
    public class Category
    {
        [Key]
        public int id { get; set; }
        [Required]
        public string categoryLine { get; set; }
        [Required]
        public string categoryName { get; set; }

        public int Parent_id { get; set; }


        // public ICollection<Product> Products { get; set; }
        // public Category()
        // {
        //     Products = new List<Product>();
        // }
    }
}
