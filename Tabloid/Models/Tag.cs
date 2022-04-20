using System.ComponentModel.DataAnnotations;

namespace Tabloid.Models
{
    public class Tag
    {
        public int Id { get; set; }

        [Required]
        [StringLength(50, MinimumLength = 3)]
        public string Name { get; set; }
    }
}
