using InternetShowcase.Data.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace InternetShowcase.Data.interfaces {
    public interface ICategories
    {
        Task<IEnumerable<Category>> GetCategoriesAsync();
        Category GetByType(string categoryLine);
        Category Create(Category category);
        bool Update(int id, Category category);
        bool Delete(int id);
    }
}