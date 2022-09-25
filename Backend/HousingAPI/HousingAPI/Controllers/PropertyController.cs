using HousingAPI.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace HousingAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PropertyController : ControllerBase
    {
        private readonly IPropertyRepository _propertyRepository;

        public PropertyController(IPropertyRepository propertyRepository )
        {
            _propertyRepository = propertyRepository;
        }

        [HttpGet("list/{sellRent}")]
        public async Task<IActionResult> GetPropertyList(int sellRent)
        {
            var propertyList= await _propertyRepository.GetProperties(sellRent);
            return Ok(propertyList);
        } 
        
        [HttpGet("details/{id}")]
        public async Task<IActionResult> GetProperty(int id)
        {
            var property= await _propertyRepository.GetPropertyDetails(id);
            return Ok(property);
        }
        
        [HttpGet("propertyTypes")]
        public async Task<IActionResult> GetPropertyTypeList()
        {
            var property= await _propertyRepository.GetPropertyTypes();
            return Ok(property);
        }
    }
}
