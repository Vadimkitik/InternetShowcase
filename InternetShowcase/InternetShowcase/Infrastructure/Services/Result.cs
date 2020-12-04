namespace InternetShowcase.Infrastructure.Services
{
    public class Result
    {
        public bool Succeeded { get; set; }
        public bool Failure => !this.Succeeded;
        public string Errors { get; set; }

        public static implicit operator Result(bool succeeded)
            => new Result { Succeeded = succeeded };

        public static implicit operator Result(string error)
            => new Result { 
                Succeeded = false, 
                Errors = error 
            };

    }
}
