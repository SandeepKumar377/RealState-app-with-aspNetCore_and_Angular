using HousingAPI.DTOs;
using HousingAPI.Models;
using System.Threading.Tasks;

namespace HousingAPI.Interface
{
    public interface IAccountRepository
    {
        Task<User> SignUp(UserRegisterDto userRegisterDto);
        Task<bool> UserExist(string email);
        Task<User> Login(UserLoginDto userLoginDto);
    }
}
