using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface ICategoryRepository
    {
        List<Category> GetAll();
        public Category GetById(int id);
        public void Add(Category category);
        public void Update(Category category);  
        public void Delete(int id);
    }
}