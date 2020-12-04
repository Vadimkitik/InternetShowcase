using AutoMapper;
using InternetShowcase.Data.Models;
using InternetShowcase.Features.Categories.Models;
using InternetShowcase.Features.Products.Models;
using InternetShowcase.Features.Roles.Models;
using InternetShowcase.Features.Users.Models;
using Microsoft.AspNetCore.Identity;

namespace InternetShowcase.Infrastructure.MappingProfiles
{
    public class MappingProfile : Profile
    {
       public MappingProfile()
        {
            CreateMap<Product, ProductView>();
            CreateMap<Product, ProductListingModel>()
                .ForMember(dest => dest.Category, opt => opt.MapFrom(src => src.Category.Name));

            CreateMap<User, UsersListingModel>();
            CreateMap<IdentityRole, RolesListingModel>();

            CreateMap<Category, CategoryView>();

            CreateMap<ProductView, Product>();
            CreateMap<CategoryView, Category>();
        }
    }
}
