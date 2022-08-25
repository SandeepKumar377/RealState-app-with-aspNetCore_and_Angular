using HousingAPI.DataContext;
using HousingAPI.DTOs;
using HousingAPI.Interface;
using HousingAPI.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace HousingAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly IAccountRepository _accountRepo;

        public AccountController(IAccountRepository accountRepo)
        {
            _accountRepo = accountRepo;
        }

        [HttpPost("Register")]
        public async Task<ActionResult<UserRegisterDto>> UserRegister([FromBody]UserRegisterDto userRegisterDto)
        {
            if (await _accountRepo.UserExist(userRegisterDto.Email))
            {
                return BadRequest("User already exist!");
            }
            var result = await _accountRepo.SignUp(userRegisterDto);
            return Created("~api/Account/Register", new { result });
        }

        [HttpPost("Login")]
        public async Task<ActionResult<UserLoginDto>> UserLogin([FromBody]UserLoginDto userLoginDto)
        {
            var result = await _accountRepo.Login(userLoginDto);
            if (result==null)
            {
                return Unauthorized("Invalid credentails!");
            }
            var user = new UserRegisterDto();
            user.Email= result.Email;
            user.UserName= result.UserName;
            return Ok(user);
        }
    }
}
