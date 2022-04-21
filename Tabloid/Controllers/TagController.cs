using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Security.Claims;
using Tabloid.Models;
using Tabloid.Repositories;


namespace Tabloid.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class TagController : ControllerBase
    {
        private readonly ITagRepository _tagRepository;
        private readonly IUserProfileRepository _userProfileRepository;
        public TagController(ITagRepository tagRepository, IUserProfileRepository userProfileRepository)
        {
            _tagRepository = tagRepository;
            _userProfileRepository = userProfileRepository;

        }
            [HttpGet]
            public IActionResult GetAllTags()
            {
                return Ok(_tagRepository.GetAll());
            }

            [HttpGet("{id}")]
            public IActionResult GetTagsById(int id)
            {
               
                return Ok(_tagRepository.GetById(id));
            }

        [HttpPost]
        public IActionResult Post(Tag tag)
        {
            _tagRepository.Add(tag);
            return Ok(tag);
        }

        //[HttpPut("{id}")]
        //public IActionResult Put(int id, Tag tag)
        //{
        //    if (id != tag.Id)
        //    {
        //        return NotFound();
        //    }

        //    _tagRepository.Update(tag);
        //    return NoContent();
        //}

        //[HttpDelete("{id}")]
        //public IActionResult Delete(int id)
        //{
        //    _tagRepository.Delete(id);
        //    return NoContent();
        //}
    }
}
