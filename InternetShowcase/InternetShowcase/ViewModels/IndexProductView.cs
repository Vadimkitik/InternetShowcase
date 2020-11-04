using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InternetShowcase.ViewModels
{
    public class IndexProductView
    {
        public int Id { get; set; }
        public string ProductLine { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public double Price { get; set; }

        public double? OldPrice { get; set; }

        public string ImageUrl { get; set; }

        public bool IsFavourite { get; set; }

        public bool Available { get; set; }

        public string Category { get; set; }
        public string SubCategory { get; set; }
        public string UnderSubCategory { get; set; }
    }
}
