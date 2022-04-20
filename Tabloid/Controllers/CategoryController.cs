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
    public class CategoryController : ControllerBase
    {
        private readonly ICategoryRepository _categoryRepository;
        private readonly IUserProfileRepository _userProfileRepository;

        public CategoryController(ICategoryRepository categoryRepository, IUserProfileRepository userProfileRepository)
        {
            _categoryRepository = categoryRepository;
            _userProfileRepository = userProfileRepository;
        }
        
        [HttpGet]
        public IActionResult GetAllCategories()
        {
            return Ok(_categoryRepository.GetAll());
        }
        [HttpGet("{id}")]
        public IActionResult GetCategoryById(int id)
        {
            return Ok(_categoryRepository.GetById(id));
        }
        [HttpPost]
        public IActionResult Post(Category category)
        {
            UserProfile loggedInUser = GetCurrentUserProfile();
            if (loggedInUser.UserTypeId != 1)
            {
                return NotFound();
            }
            else
            {
                _categoryRepository.Add(category);
            return Ok(category);

            }
        }
        [HttpPut("{id}")]
        public IActionResult Update(int id, Category category)
        {
            UserProfile loggedInUser = GetCurrentUserProfile();
            if (loggedInUser.UserTypeId != 1)
            {
                return NotFound();
            }
            else
            {
            if (id != category.Id)
            {
                return BadRequest();
            }
            _categoryRepository.Update(category);
            return NoContent();

            }
        }
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            UserProfile loggedInUser = GetCurrentUserProfile();
            if (loggedInUser.UserTypeId != 1)
            {
                return NotFound();

            } 
            else
            {
                
                _categoryRepository.Delete(id);
                return NoContent();

            }
        }
        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
        }

    }
}
