using System.ComponentModel.DataAnnotations;

namespace InternetShowcase.Features.Identity.Models
{
    public class ConfirmEmailRequestModel
    {
        [Required]
        public string userId { get; set; }
        [Required]
        public string code { get; set; }
    }
}
