using InternetShowcase.Features.Categories;

namespace InternetShowcase.Features.Products
{
    public class ProductView
    {
        public int Id { get; set; }
        public string ProductLine { get; set; }

        public string Name { get; set; }
       
        public string Description { get; set; }
   
        public double Price { get; set; }

        public double? OldPrice { get; set; }
      
        public string ImageUrl { get; set; }

        public string IsFavourite { get; set; }

        public string Available { get; set; }
        
        public string CategoryId { get; set; }
       
        public CategoryView Category { get; set; }
    }
}
