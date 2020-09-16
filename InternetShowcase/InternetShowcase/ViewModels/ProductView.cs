using InternetShowcase.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InternetShowcase.ViewModels
{
    public class ProductView
    {
        public int id { get; set; }
        public string productLine { get; set; }

        public string name { get; set; }
       
        public string description { get; set; }
   
        public double price { get; set; }

        public double? oldPrice { get; set; }
      
        public string imageUrl { get; set; }

        public bool isFavourite { get; set; }

        public bool available { get; set; }
       
        public int categoryID { get; set; }
        public CategoryView Category { get; set; }
    }
}
