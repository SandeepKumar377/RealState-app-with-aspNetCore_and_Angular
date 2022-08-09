using HousingAPI.DataContext;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace HousingAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CityController : ControllerBase
    {
        private readonly HousingDataContext _housingDataContext;

        public CityController(HousingDataContext housingDataContext)
        {
            _housingDataContext = housingDataContext;
        }
        public IActionResult GetCity()
        {
            var cities = _housingDataContext.Cities.ToList();
            return Ok(cities);
        }
    }
}
