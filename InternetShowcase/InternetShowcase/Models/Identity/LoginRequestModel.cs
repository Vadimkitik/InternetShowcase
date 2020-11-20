using System.ComponentModel.DataAnnotations;

namespace InternetShowcase.Models.Identity
{
    public class LoginRequestModel
    {
        [Required]
        [EmailAddress(ErrorMessage = "Некорректный адрес")]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
