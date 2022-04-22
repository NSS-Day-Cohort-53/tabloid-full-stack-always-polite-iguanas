using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface IPostRepository
    {
        List<Post> GetAll();
        List<Post> ViewMyPosts(string firebaseUserId);
        Post GetPostById(int id);
    }
}