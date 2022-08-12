using AutoMapper;
using HousingAPI.DTOs;
using HousingAPI.Models;

namespace HousingAPI.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<City, CityDTO>();
        }
    }
}
