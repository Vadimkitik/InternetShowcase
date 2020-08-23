using InternetShowcase.Data.Models;
using System.Collections.Generic;

namespace InternetShowcase.Data.interfaces
{
   public interface IAllProducts
    {
        IEnumerable<Product> Products { get; }
        IEnumerable<Product> getFavProducts { get; }
        Product getObjproduct(int productId);
    }
}