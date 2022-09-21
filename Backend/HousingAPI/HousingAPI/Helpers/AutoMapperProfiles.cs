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
            CreateMap<Property, PropertyDto>()
                .ForMember(x => x.CityName, x=>x.MapFrom(x=>x.City.Name))
                .ForMember(x => x.PropertyType, x=>x.MapFrom(x=>x.PropertyType.Name))
                .ForMember(x => x.FurnishingType, x=>x.MapFrom(x=>x.FurnishingType.Name));
        }
    }
}
