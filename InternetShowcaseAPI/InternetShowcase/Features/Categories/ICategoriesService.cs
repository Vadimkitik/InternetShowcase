using InternetShowcase.Data.Models;
using InternetShowcase.Features.Categories.Models;
using InternetShowcase.Infrastructure.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace InternetShowcase.Features.Categories
{
    public interface ICategoriesService
    {
        Task<IEnumerable<Category>> GetAll();
        Task<Category> GetByLine(string line);
        Task<Category> Create(Category item);
        Task<IEnumerable<Product>> GetProductsOfCategory(List<int> categories_id);
        Task<Result> Update(UpdateCategoryRequestModel model);
        Task<Result> Delete(int id);
    }
}