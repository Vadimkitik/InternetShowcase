using AutoMapper;
using InternetShowcase.Data;
using InternetShowcase.Data.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InternetShowcase.Features.Questions
{
    public class QuestionsController : ApiController
    {
        private readonly IMapper _mapper;
        private readonly ShowcaseDbContext _context;

        public QuestionsController(IMapper mapper, ShowcaseDbContext context)
        {
            _mapper = mapper;
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Question>>> GetQuestions()
        {
            var questions = await _context.Questions.ToListAsync();

            if (questions == null)
            {
                return BadRequest();
            }
            return questions;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Question>> GetQuestion(int id)
        {
            var question = await _context.Questions.FirstOrDefaultAsync(q => q.Id == id);
            if (question != null)
            {
                return question;
            }
            return NotFound();
        }
    }
}

