﻿using System.ComponentModel.DataAnnotations;

namespace HousingAPI.DTOs
{
    public class UserLoginDto
    {
        [Required(ErrorMessage ="Email is required!")]
        public string Email { get; set; }
        [Required(ErrorMessage ="Password is required!")]
        public string Password { get; set; }
    }
}
