using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace InternetShowcase.Features.Roles.Models
{
    public class ChangeRoleRequestModel
    {
        public string UserId { get; set; }
        public string UserEmail { get; set; }
        public List<IdentityRole> AllRoles { get; set; }
        public IList<string> UserRoles { get; set; }
        public ChangeRoleRequestModel()
        {
            AllRoles = new List<IdentityRole>();
            UserRoles = new List<string>();
        }
    }
}
