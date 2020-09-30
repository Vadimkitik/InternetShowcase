using TestWebAPI.Data.Models;
using System.Collections.Generic;

namespace TestWebAPI.Data.interfaces {
    public interface ICategories
    {
        IEnumerable<Category> GetCategories();
        Category GetByType(string categoryLine);
        Category Create(Category category);
        bool Update(int id, Category category);
        bool Delete(int id);
    }
}