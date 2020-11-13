using AutoMapper;
using InternetShowcase.Data.Models;

namespace InternetShowcase.ViewModels.MappingProfile
{
    public class MappingProfile : Profile
    {
       public MappingProfile()
        {
            CreateMap<Product, ProductView>();
            CreateMap<Product, IndexProductView>()
                .ForMember(dest => dest.Category, opt => opt.MapFrom(src => src.Category.Name));

            CreateMap<Category, CategoryView>();
            CreateMap<User, UserView>();

            CreateMap<ProductView, Product>();
            CreateMap<CategoryView, Category>();
            CreateMap<UserView, User>();
        }
    }
}
