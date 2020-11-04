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
                .ForMember(dest => dest.Category, opt => opt.MapFrom(src => src.Category.CategoryName))
                .ForMember(dest => dest.SubCategory, opt => opt.MapFrom(src => src.SubCategory.CategoryName))
                .ForMember(dest => dest.UnderSubCategory, opt => opt.MapFrom(src => src.UnderSubCategory.CategoryName));

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
