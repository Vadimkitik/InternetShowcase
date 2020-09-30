using TestWebAPI.Data.Models;
using System.Collections.Generic;

namespace TestWebAPI.Data.interfaces
{
   public interface IAllProducts
    {
        IEnumerable<Product> Products { get; }
        Product GetByLine(string productLine);
        Product Create(Product product);
        bool Update(Product product);
        bool Delete(int id);
        IEnumerable<Product> getFavProducts { get; }
        Product getObjproduct(int productId);
    }
}