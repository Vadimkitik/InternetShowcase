using System.ComponentModel.DataAnnotations;

namespace InternetShowcase.Features.SendEmails.Models
{
    public class FeedbackFormRequestModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [MaxLength(30)]
        public string Subject { get; set; }

        [Required]
        [MaxLength(200)]
        public string Message { get; set; }
    }
}
