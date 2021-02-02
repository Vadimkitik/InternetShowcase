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

            CreateMap<User, UsersListingResponseModel>();
            CreateMap<IdentityRole, RolesListingResponseModel>();
            CreateMap<User, UsersListAccessResponseModel>(); 

            CreateMap<Category, CategoryView>();

            CreateMap<ProductView, Product>();
            CreateMap<CategoryView, Category>();

            CreateMap<UpdateProductRequestModel, Product>()
                .ForMember(s => s.CreatedOn, opt => { opt.Ignore(); })
                .ForMember(s => s.CreatedBy, opt => { opt.Ignore(); });

            CreateMap<UpdateCategoryRequestModel, Category>()
                .ForMember(s => s.CreatedOn, opt => opt.Ignore())
                .ForMember(s => s.CreatedBy, opt => opt.Ignore());
        }
    }
}
