using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TestWebAPI.Data.Models
{
    public class Product
    {
        [Key]
        public int id { get; set; }
        [Required]
        public string productLine { get; set; }
        [Required]
        public string name { get; set; }
        [Required]
        public string description { get; set; }
        [Required]
        public double price { get; set; }

        public double? oldPrice { get; set; }
        [Required]
        public string imageUrl { get; set; }
        [Required]
        public bool isFavourite { get; set; }
        [Required]
        public bool available { get; set; }
        [Required]
        public int categoryID { get; set; }
        [ForeignKey("categoryID")]
        public Category Category { get; set; }
    }
}
