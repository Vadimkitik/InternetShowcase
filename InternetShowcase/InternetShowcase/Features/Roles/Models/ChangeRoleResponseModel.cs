using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace InternetShowcase.Features.Roles.Models
{
    public class ChangeRoleResponseModel
    {
        public string UserId { get; set; }
        public string UserEmail { get; set; }
        public List<IdentityRole> AllRoles { get; set; }
        public IList<string> UserRoles { get; set; }
        public ChangeRoleResponseModel()
        {
            AllRoles = new List<IdentityRole>();
            UserRoles = new List<string>();
        }
    }
}
