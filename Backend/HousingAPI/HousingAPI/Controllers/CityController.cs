using HousingAPI.DataContext;
using HousingAPI.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HousingAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private readonly ICityRepository _cityRepo;

        public CityController(ICityRepository cityRepo)
        {
            _cityRepo = cityRepo;
        }
        [HttpGet("City")]
        public async Task<IActionResult> GetCity()
        {
            var cities = await _cityRepo.GetAllCity();
            return Ok(cities);
        }
    }
}
