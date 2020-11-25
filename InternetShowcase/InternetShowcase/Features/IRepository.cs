using System.Collections.Generic;
using System.Threading.Tasks;

namespace InternetShowcase.Features
{
    public interface IRepository<T>
        where T : class
    {
        Task<IEnumerable<T>> GetAll();
        Task<T> GetByType(string line);
        Task<T> Create(T item);
        Task<bool> Update(T item);
        Task<bool> Delete(int id);
    }
}