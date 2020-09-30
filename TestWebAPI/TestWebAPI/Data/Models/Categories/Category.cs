using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TestWebAPI.Data.Models
{
    public class Category
    {
        [Key]
        public int id { get; set; }
        [Required]
        public string categoryLine { get; set; }
        [Required]
        public string categoryName { get; set; }

        public ICollection<Product> Products { get; set; }
       
        public ICollection<SubCategory> SubCategories { get; set; }

        public Category()
        {
            Products = new List<Product>();
            SubCategories = new List<SubCategory>();
        }
    }
}
