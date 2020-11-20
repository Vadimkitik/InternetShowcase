using InternetShowcase.Data;
using InternetShowcase.Data.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using InternetShowcase.Data.interfaces;
using AutoMapper;
using InternetShowcase.ViewModels;
using Microsoft.AspNetCore.Authorization;

namespace InternetShowcase.Controllers
{
    public class UsersController : ApiController
    {
        private readonly IRepository<UserOld> _users;
        private readonly IMapper _mapper;

        public UsersController(IRepository<UserOld> users, IMapper mapper)
        {
            _users = users;
            _mapper = mapper;
        }

        [Authorize]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserView>>> GetUsers()
        {
            var users = await _users.GetAll();

            if (users == null)
            {
                return BadRequest();
            }
            return _mapper.Map<List<UserOld>, List<UserView>>((List<UserOld>)users);
        }

        // GET: api/Users/5
        [HttpGet("{email}")]
        public async Task<ActionResult<UserView>> GetUserByEmail(string email)
        {
            var user = await _users.GetByType(email);

            if (user != null)
            {
                return _mapper.Map<UserOld, UserView>(user);
            }
            return NotFound();
        }

        [HttpPost]
        public async Task<ActionResult<UserView>> PostUser(UserOld model)
        {
            if (ModelState.IsValid)
            {
                _mapper.Map<UserOld, UserView>(await _users.Create(model));
                return Ok(model);
            }
            return BadRequest(ModelState);
        }

        [HttpPut()]
        public async Task<bool> EditUser(UserOld user)
        {
            return await _users.Update(user);
        }

        [HttpDelete("{id}")]
        public async Task<bool> DeleteUser(int id)
        {
            return await _users.Delete(id);
        }
    }
}
