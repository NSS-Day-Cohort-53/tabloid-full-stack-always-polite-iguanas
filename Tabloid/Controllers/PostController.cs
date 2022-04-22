using System;
using System.Collections.Generic;
using System.Security.Claims;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Tabloid.Repositories;
using Tabloid.Models;
using Microsoft.AspNetCore.Authorization;

namespace Tabloid.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IPostRepository _postRepository;
        public PostController(IPostRepository postRepository)
        {
            _postRepository = postRepository;
        }
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_postRepository.GetAll());
        }
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var post = _postRepository.GetPostById(id);
            if (post == null)
            {
                return NotFound();
            }
            return Ok(post);
        }
        private string GetCurrentUserProfileId()
        {
            string id = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return id;   
        }
        [HttpGet("myposts")]
        public IActionResult ViewMyPostList()
        {

            List<Post> posts = new List<Post>();
            {
                string userIdString = GetCurrentUserProfileId();
                posts = _postRepository.ViewMyPosts(userIdString);
                if (posts == null)
                {
                    return NotFound();
                }
            }
            return Ok(posts);

        }
    }
}
