using System.ComponentModel.DataAnnotations;

namespace InternetShowcase.Models.Identity
{
    public class RegisterRequestModel
    {
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string Name { get; set; }
    }
}
