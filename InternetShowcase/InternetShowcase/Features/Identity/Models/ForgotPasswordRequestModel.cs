using System.ComponentModel.DataAnnotations;

namespace InternetShowcase.Features.Identity.Models
{
    public class ForgotPasswordRequestModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
