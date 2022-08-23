using HousingAPI.DTOs;
using HousingAPI.Models;
using System.Threading.Tasks;

namespace HousingAPI.Interface
{
    public interface IAccountRepository
    {
        Task<UserRegister> SignUp(UserRegisterDto userRegisterDto);
        Task<bool> UserExist(string email);
        Task<bool> Login(UserLoginDto userLoginDto);
    }
}
