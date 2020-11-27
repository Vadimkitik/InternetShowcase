using AutoMapper;
using InternetShowcase.Data.Models;
using InternetShowcase.Features.Categories.Models;
using InternetShowcase.Features.Products.Models;

namespace InternetShowcase.MappingProfiles
{
    public class MappingProfile : Profile
    {
       public MappingProfile()
        {
            CreateMap<Product, ProductView>();
            CreateMap<Product, ProductListingServiceModel>()
                .ForMember(dest => dest.Category, opt => opt.MapFrom(src => src.Category.Name));

            CreateMap<Category, CategoryView>();

            CreateMap<ProductView, Product>();
            CreateMap<CategoryView, Category>();
        }
    }
}
