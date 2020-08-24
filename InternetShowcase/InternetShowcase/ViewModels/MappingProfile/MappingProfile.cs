using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using InternetShowcase.Data.Models;

namespace InternetShowcase.ViewModels.MappingProfile
{
    public class MappingProfile : Profile
    {
       public MappingProfile()
        {
            CreateMap<Product, ProductView>();

            CreateMap<Category, CategoryView>();
              
        }
    }
}
