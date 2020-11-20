using System.ComponentModel.DataAnnotations;

namespace InternetShowcase.Models.Identity
{
    public class RegisterRequestModel
    {
        [Required]
        [EmailAddress(ErrorMessage = "Некорректный адрес")]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Role { get; set; }
    }
}
