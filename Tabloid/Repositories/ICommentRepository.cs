using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface ICommentRepository
    {
        List<Comment> GetAllByPostId(int id);
        void Add(Comment comment);
        void Delete (int id);
        void Update (Comment comment);
    }
}