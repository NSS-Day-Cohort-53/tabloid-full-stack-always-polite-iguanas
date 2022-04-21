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

        [HttpPost]
        public IActionResult Post(Comment comment)
        {
            comment.CreateDateTime = DateTime.Now;
            UserProfile currentUser = GetCurrentUserProfile();
            comment.UserProfileId = currentUser.Id;
            _commentRepo.Add(comment);
            return Ok(comment);
        }
    }
}
