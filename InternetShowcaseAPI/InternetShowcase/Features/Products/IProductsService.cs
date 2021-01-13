using InternetShowcase.Data.Models;
using InternetShowcase.Features.Products.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace InternetShowcase.Features.Products
{
   public interface IProductsService
    {
        Task<IEnumerable<Product>> GetAll();
        Task<Product> GetByLine(string productLine);
        Task<Product> Create(Product product);
        Task<bool> Update(UpdateProductRequestModel productModel);
        Task<bool> Delete(int id);
        IEnumerable<Product> getFavProducts { get; }
        Product getObjproduct(int productId);
    }
}