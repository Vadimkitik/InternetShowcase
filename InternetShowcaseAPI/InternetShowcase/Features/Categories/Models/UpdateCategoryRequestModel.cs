namespace InternetShowcase.Features.Categories.Models
{
    public class UpdateCategoryRequestModel
    {
        public int Id { get; set; }
        public string Line { get; set; }

        public string Name { get; set; }
        public int Parent_Id { get; set; }
    }
}
