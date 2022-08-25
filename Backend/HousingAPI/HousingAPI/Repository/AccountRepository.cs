using HousingAPI.DataContext;
using HousingAPI.DTOs;
using HousingAPI.Interface;
using HousingAPI.Models;
using Microsoft.EntityFrameworkCore;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace HousingAPI.Repository
{
    public class AccountRepository : IAccountRepository
    {
        private readonly HousingDataContext _context;

        public AccountRepository(HousingDataContext context)
        {
            _context = context;
        }
        public async Task<UserRegister> SignUp(UserRegisterDto userRegisterDto)
        {
            using var hmac = new HMACSHA512(); // convert password into Hash (algorithm)  
            var user = new UserRegister() 
            { 
                UserName = userRegisterDto.UserName.ToLower(),
                Email = userRegisterDto.Email.ToLower(),
                Mobile = userRegisterDto.Mobile,
                Password = hmac.ComputeHash(Encoding.UTF8.GetBytes(userRegisterDto.Password)),// convert password into Hash 
                PasswordSalt = hmac.Key
            };
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return user;
        }

        public async Task<UserRegister> Login(UserLoginDto userLoginDto)
        {
            var user= await _context.Users.FirstOrDefaultAsync(x=>x.Email==userLoginDto.Email);
            if (user==null)
            {
                return null;
            }
            //verify Hash Password for login user
            using (var hmac = new HMACSHA512(user.PasswordSalt))
            {
                var computedHash=hmac.ComputeHash(Encoding.UTF8.GetBytes(userLoginDto.Password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != user.Password[i])
                    {
                        return null;
                    }
                }
            }
            return user;
        }
        
        public async Task<bool> UserExist(string email)
        {
            return await _context.Users.AnyAsync(x=>x.Email==email.ToLower());
        }
    }
}
