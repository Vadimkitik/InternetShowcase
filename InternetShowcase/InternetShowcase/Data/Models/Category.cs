using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace InternetShowcase.Data.Models
{
    public class Category
    {
        public int id { get; set; }
        [Required]
        public string categoryName { get; set; }

        public List<Product> products { get; set; }
    }
}
