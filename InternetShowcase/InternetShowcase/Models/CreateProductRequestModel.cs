using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InternetShowcase.Models
{
    public class CreateProductRequestModel
    {
        public string Name { get; set; }

        public string Type { get; set; }

        public string Description { get; set; }

        public double Price { get; set; }

        public string ImageUrl { get; set; }
    }
}
