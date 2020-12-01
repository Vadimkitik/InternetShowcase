using InternetShowcase.Data.Models.Base;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace InternetShowcase.Data.Models
{
    public class Category : DeletableEntity
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Line { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public int Parent_Id { get; set; }
        public ICollection<Category> Children { get; set; }

        public ICollection<Product> Products { get; set; }


        public Category()
        {
            Products = new List<Product>();
            Children = new List<Category>();
        }
    }
}
