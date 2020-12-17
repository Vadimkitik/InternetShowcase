using System.ComponentModel.DataAnnotations;

namespace InternetShowcase.Features.SendEmails.Models
{
    public class SendMailRequestModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [MaxLength(30)]
        public string Subject { get; set; }

        [Required]
        [MaxLength(300)]
        public string Message { get; set; }
    }
}
