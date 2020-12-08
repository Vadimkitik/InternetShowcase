using System.ComponentModel.DataAnnotations;

namespace InternetShowcase.Features.SendEmails.Models
{
    public class SendMailRequestModel
    {
        [Required]
        public string Email { get; set; }
        [Required]
        public string Subject { get; set; }
        [Required]
        public string Message { get; set; }
    }
}
