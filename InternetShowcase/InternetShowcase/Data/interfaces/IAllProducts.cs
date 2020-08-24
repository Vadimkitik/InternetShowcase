using InternetShowcase.Data.Models;
using Microsoft.EntityFrameworkCore.Update.Internal;
using System.Collections.Generic;

namespace InternetShowcase.Data.interfaces
{
   public interface IAllProducts
    {
        IEnumerable<Product> Products { get; }
        Product GetById(int id);
        Product Create(Product product);
        bool Update(Product product);
        bool Delete(int id);
        IEnumerable<Product> getFavProducts { get; }
        Product getObjproduct(int productId);
    }
}