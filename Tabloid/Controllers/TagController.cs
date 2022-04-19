using Microsoft.AspNetCore.Mvc;
using Tabloid.Models;
using Tabloid.Repositories;

namespace Tabloid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TagController : ControllerBase
    {
        private readonly ITagRepository _tagRepository;
        public TagController(ITagRepository tagRepository)
        {
            _tagRepository = tagRepository;

        }
            [HttpGet]
            public IActionResult Get()
            {
                return Ok(_tagRepository.GetAll());
            }

            [HttpPost("{id}")]
            public IActionResult Get(int id)
            {
                var tag = _tagRepository.Get(id);
                if (tag == null)
                {
                    return NotFound();
                }
                return Ok(tag);
            }

        //[HttpPost]
        //public IActionResult Post(Tag tag)
        //{
        //    _tagRepository.Add(tag);
        //    return CreatedAtAction("Get", new { id = tag.Id }, tag);
        //}

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
