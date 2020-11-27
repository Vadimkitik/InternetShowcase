namespace InternetShowcase.Features.Users.Models
{
    public class ChangePasswordRequestModel
    {
        public string Id { get; set; }
        public string Email { get; set; }
        public string NewPassword { get; set; }
    }
}
