using System.ComponentModel.DataAnnotations;

namespace InternetShowcase.Features.Users.Models
{
    public class UpdateUserRequestModel
    {
        [Required]
        public string Id { get; set; }
        public string Email { get; set; }
        public string UserName { get; set; }
    }
}
