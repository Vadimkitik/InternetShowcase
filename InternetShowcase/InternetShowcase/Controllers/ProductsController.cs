﻿using InternetShowcase.Data;
using InternetShowcase.Data.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InternetShowcase.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        private readonly ShowcaseDbContext data;

        public ProductsController(ShowcaseDbContext context)
        {
            data = context;

            if (!data.Products.Any())
            {
                var rnd = new Random();
                for (int i = 1; i <= 15; i++)
                {
                    data.Products.Add(
                        new Product 
                        { 
                            Name = "Цветок №" + i,
                            Type = "цветы",
                            Price = rnd.Next(3, 15),
                            OldPrice = rnd.Next(15, 35),
                            Description = "Что то про этот цветок",
                            ImageUrl = "assest/img/products-" + i
                        });
                }
                data.SaveChanges();
            }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Product>>> Get()
        {
            return await data.Products.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> Get(int id)
        {
            Product product = await data.Products.FirstOrDefaultAsync(p => p.Id == id);

            if (product != null)
            {
                return product;
            }
            return NotFound();
        }

        [HttpPost]
        public async Task<ActionResult> Post(Product product)
        {
            if (ModelState.IsValid)
            {
                data.Products.Add(product);
                await data.SaveChangesAsync();
                return Ok(product);
            }
            return BadRequest(ModelState);
        }
    }
}
