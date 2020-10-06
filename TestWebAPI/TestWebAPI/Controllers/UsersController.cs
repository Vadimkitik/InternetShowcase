using TestWebAPI.Data;
using TestWebAPI.Data.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using TestWebAPI.Data.interfaces;
using AutoMapper;
using TestWebAPI.ViewModels;

namespace TestWebAPI.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IRepository<User> _users;
        private readonly IMapper _mapper;

        public UsersController(IRepository<User> users, IMapper mapper)
        {
            _users = users;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserView>>> GetProducts()
        {
            var users = await _users.GetAll();

            if (users == null)
            {
                return BadRequest();
            }
            return _mapper.Map<List<User>, List<UserView>>((List<User>)users);
        }

        // GET: api/Users/5
        [HttpGet("{email}")]
        public async Task<ActionResult<UserView>> GetUserByEmail(string email)
        {
            var user = await _users.GetByType(email);

            if (user != null)
            {
                return _mapper.Map<User, UserView>(user);
            }
            return NotFound();
        }

        [HttpPost]
        public async Task<ActionResult<UserView>> PostCategory(User model)
        {
            if (ModelState.IsValid)
            {
                _mapper.Map<User, UserView>(await _users.Create(model));
                return Ok(model);
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{id}")]
        public async Task<bool> PutCategory(int id, User user)
        {
            return await _users.Update(id, user);
        }

        [HttpDelete("{id}")]
        public async Task<bool> DeleteCategory(int id)
        {
            return await _users.Delete(id);
        }
    }
}
