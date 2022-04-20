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
    public class CommentController : ControllerBase
    {
        private readonly ICommentRepository _commentRepo;
        private readonly IUserProfileRepository _userProfileRepo;
        public CommentController(ICommentRepository commentRepository, IUserProfileRepository userProfileRepository)
        {
            _commentRepo = commentRepository;
            _userProfileRepo = userProfileRepository;
        }

        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userProfileRepo.GetByFirebaseUserId(firebaseUserId);
        }

        [HttpGet("{id}")]
        public IActionResult GetAllByPostId(int id)
        {
            return Ok(_commentRepo.GetAllByPostId(id));
        }

        [HttpPost]
        public IActionResult Post(Comment comment)
        {
            comment.CreateDateTime = DateTime.Now;
            UserProfile currentUser = GetCurrentUserProfile();
            comment.UserProfileId = currentUser.Id;
            _commentRepo.Add(comment);
            return Ok(comment);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, Comment comment)
        {
            if (id != comment.Id)
            {
                return BadRequest();
            }

            _commentRepo.Update(comment);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _commentRepo.Delete(id);
            return NoContent();
        }
    }
}
