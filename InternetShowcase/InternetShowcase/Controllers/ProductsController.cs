using AutoMapper;
using InternetShowcase.Data;
using InternetShowcase.Data.interfaces;
using InternetShowcase.Data.Models;
using InternetShowcase.ViewModels;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InternetShowcase.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        private readonly IAllProducts _allProducts;
        private readonly ShowcaseDbContent data;
        private readonly IMapper _mapper;

        public ProductsController(ShowcaseDbContent content, IAllProducts iAllProducts, IProductsCategory iProductsCat, IMapper mapper)
        {
            _allProducts = iAllProducts;
            _mapper = mapper;
            data = content;
        }

        [HttpGet]
        public ActionResult<IEnumerable<ProductView>> Get()
        {
            var products = _allProducts.Products.ToList();
            return _mapper.Map<List<Product>, List<ProductView>>(products);
        }

        [HttpGet("{id}")]
        public ActionResult<ProductView> Get(int id)
        {
            return _mapper.Map<Product, ProductView>(_allProducts.GetById(id));
        }
     
        [HttpPost]
        public ActionResult<ProductView> Post(Product model)
        {
            return _mapper.Map<Product, ProductView>(_allProducts.Create(model));
        }
        [HttpDelete("{id}")]
        public bool Post(int id)
        {
            return _allProducts.Delete(id);
        }

        [HttpPut]
        public bool Edit(Product product)
        {
            return _allProducts.Update(product);
        }



    }
}
