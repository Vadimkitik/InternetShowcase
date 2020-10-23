using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace InternetShowcase.Data.Models
{
    public class Category
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string CategoryLine { get; set; }
        [Required]
        public string CategoryName { get; set; }

        public ICollection<Product> Products { get; set; }
        public ICollection<SubCategory> SubCategories { get; set; }


        public Category()
        {
            Products = new List<Product>();
            SubCategories = new List<SubCategory>();
        }
    }
}
