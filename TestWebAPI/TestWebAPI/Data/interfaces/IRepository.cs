using TestWebAPI.Data.Models;
using System.Collections.Generic;
using System;
using System.Threading.Tasks;

namespace TestWebAPI.Data.interfaces {
    public interface IRepository<T>
        where T : class
    {
        Task<IEnumerable<T>> GetAll();
        Task<T> GetByType(string line);
        Task<T> Create(T item);
        Task<bool> Update(int id, T item);
        Task<bool> Delete(int id);
    }
}