using System.ComponentModel.DataAnnotations;

namespace InternetShowcase.Features.Roles.Models
{
    public class CreateRoleRequestModel
    {
        [Required]
        public string Name { get; set; }
    }
}
