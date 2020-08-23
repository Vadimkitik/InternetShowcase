using InternetShowcase.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InternetShowcase.ViewModels
{
    public class ProductListViewModel
    {
        public IEnumerable<Product> allProducts { get; set; }
        public string currCategory { get; set; }
    }
}
