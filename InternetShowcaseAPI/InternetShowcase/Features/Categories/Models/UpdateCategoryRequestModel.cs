namespace InternetShowcase.Features.Categories.Models
{
    public class UpdateCategoryRequestModel
    {
        public string Line { get; set; }

        public string Name { get; set; }

        public int Parent_Id { get; set; }
    }
}
