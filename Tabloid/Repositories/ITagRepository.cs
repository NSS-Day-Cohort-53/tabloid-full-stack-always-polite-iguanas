using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface ITagRepository
    {
        Tag Get(int id);
        List<Tag> GetAll();
    }
}