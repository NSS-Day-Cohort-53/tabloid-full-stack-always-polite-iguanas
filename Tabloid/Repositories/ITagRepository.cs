using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface ITagRepository
    {
       public List<Tag> GetAll();
       public Tag GetById(int id);
        public void Add(Tag tag);

        public void Update(Tag tag);

        public void Delete(int id);
    }
}