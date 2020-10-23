using InternetShowcase.Data.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace InternetShowcase.Data.interfaces
{
   public interface IAllProducts
    {
        Task<IEnumerable<Product>> GetAll();
        Task<Product> GetByLine(string productLine);
        Task<Product> Create(Product product);
        Task<bool> Update(Product product);
        Task<bool> Delete(int id);
        IEnumerable<Product> getFavProducts { get; }
        Product getObjproduct(int productId);
    }
}