using AutoMapper;
using InternetShowcase.Data.Models;
using InternetShowcase.Features.Categories;
using InternetShowcase.Features.Products;

namespace InternetShowcase.MappingProfiles
{
    public class MappingProfile : Profile
    {
       public MappingProfile()
        {
            CreateMap<Product, ProductView>();
            CreateMap<Product, ProductListView>()
                .ForMember(dest => dest.Category, opt => opt.MapFrom(src => src.Category.Name));

            CreateMap<Category, CategoryView>();

            CreateMap<ProductView, Product>();
            CreateMap<CategoryView, Category>();
        }
    }
}
