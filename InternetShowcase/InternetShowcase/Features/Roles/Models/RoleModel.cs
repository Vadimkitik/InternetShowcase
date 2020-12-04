using System.ComponentModel.DataAnnotations;

namespace InternetShowcase.Features.Roles.Models
{
    public class RoleModel
    {
        [Required]
        public string Name { get; set; }
    }
}
