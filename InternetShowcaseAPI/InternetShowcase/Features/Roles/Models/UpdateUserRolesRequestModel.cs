using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace InternetShowcase.Features.Roles.Models
{
    public class UpdateUserRolesRequestModel
    {
        [Required]
        public string UserId { get; set; }
        public IList<string> Roles { get; set; }

        public UpdateUserRolesRequestModel()
        {
            Roles = new List<string>();
        }
    }
}
