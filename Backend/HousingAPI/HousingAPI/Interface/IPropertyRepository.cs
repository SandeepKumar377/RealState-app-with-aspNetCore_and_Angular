using HousingAPI.DTOs;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace HousingAPI.Interface
{
    public interface IPropertyRepository
    {
        Task<IEnumerable<PropertyDto>> GetProperties(int sellRent);
        void AddProperty(PropertyDto propertyDto);
        void DeleteProperty(int id);

    }
}
