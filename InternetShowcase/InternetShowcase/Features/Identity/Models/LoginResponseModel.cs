using System.Collections.Generic;

namespace InternetShowcase.Features.Identity.Models
{
    public class LoginResponseModel
    {
        public string Token { get; set; }

        public string UserName { get; set; }

        public string Email { get; set; }

        public IList<string> UserRoles { get; set; }

        public LoginResponseModel()
        {
            UserRoles = new List<string>();
        }
    }
}
