using System.ComponentModel.DataAnnotations;

namespace InternetShowcase.Features.SendEmails.Models
{
    public class FeedbackFormRequestModel
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Telephone { get; set; }

        [EmailAddress]
        [Required]
        public string Email { get; set; }

        public string ProductName { get; set; }

        public string ProductPrice { get; set; }

        public string ProductOldPrice { get; set; }

        public string Message { get; set; }

        public string ImageUrl { get; set; }

        public bool CheckAvailability { get; set; }

        public bool CheckPrice { get; set; }
    }
}