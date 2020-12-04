using System.ComponentModel.DataAnnotations;

namespace InternetShowcase.Features.Users.Models
{
    public class ChangePasswordRequestModel
    {
        [Required]
        public string Id { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string NewPassword { get; set; }
    }
}
