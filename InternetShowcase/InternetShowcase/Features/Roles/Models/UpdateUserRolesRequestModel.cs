using System.Collections.Generic;

namespace InternetShowcase.Features.Roles.Models
{
    public class UpdateUserRolesRequestModel
    {
        public string UserId { get; set; }
        public IList<string> Roles { get; set; }

        public UpdateUserRolesRequestModel()
        {
            Roles = new List<string>();
        }
    }
}
