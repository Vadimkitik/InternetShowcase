using AutoMapper;
using TestWebAPI.Data.Models;

namespace TestWebAPI.ViewModels.MappingProfile
{
    public class MappingProfile : Profile
    {
       public MappingProfile()
        {
            CreateMap<Product, ProductView>();
            CreateMap<Category, CategoryView>();
            CreateMap<SubCategory, SubCategoryView>();
            CreateMap<UnderSubCategory, UnderSubCategoryView>();
            CreateMap<User, UserView>();

            CreateMap<ProductView, Product>();
            CreateMap<CategoryView, Category>();
            CreateMap<SubCategoryView, SubCategory>();
            CreateMap<UnderSubCategoryView, UnderSubCategory>();
            CreateMap<UserView, User>();
        }
    }
}
