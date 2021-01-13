using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace InternetShowcase.Features.Users.Models
{
    public class CreateUserRequestModel
    {
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public IList<string> Roles { get; set; }

        public CreateUserRequestModel()
        {
            Roles = new List<string>();
        }
    }
}
