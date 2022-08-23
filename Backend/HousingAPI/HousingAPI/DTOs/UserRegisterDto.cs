using System.ComponentModel.DataAnnotations;

namespace HousingAPI.DTOs
{
    public class UserRegisterDto
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "User name is required!")]
        public string UserName { get; set; }

        [Required(ErrorMessage = "Email is required!")]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }

        public string Mobile { get; set; }


        [Required(ErrorMessage = "Password is required!")]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [Required(ErrorMessage = "Confirm password is required!")]
        [DataType(DataType.Password)]
        [Compare("Password", ErrorMessage = "Confirm password should be matched!")]
        public string ConfirmPassword { get; set; }
    }
}
