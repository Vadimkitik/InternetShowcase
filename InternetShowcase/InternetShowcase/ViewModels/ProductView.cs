namespace InternetShowcase.ViewModels
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

        public bool IsFavourite { get; set; }

        public bool Available { get; set; }
       
        public int CategoryID { get; set; }
        public CategoryView Category { get; set; }
    }
}
