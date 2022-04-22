using System.Collections.Generic;
using Microsoft.Extensions.Configuration;
using Tabloid.Models;
using Tabloid.Utils;

namespace Tabloid.Repositories
{
    public class TagRepository : BaseRepository, ITagRepository
    {   
        public TagRepository(IConfiguration configuration) : base(configuration) { }
        public List<Tag> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, [Name]
                          FROM Tag";
                    List<Tag> list = new List<Tag>();
                    var reader = cmd.ExecuteReader();
                    while (reader.Read())
                    {
                        list.Add(new Tag()
                        {
                            Id = DbUtils.GetInt(reader, "Id"),
                            Name = DbUtils.GetString(reader, "Name"),
                        });
                    }
                    reader.Close();
                    return list;

                }

            }
        }

        public Tag GetById(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, [Name]
                          FROM Tag
                         WHERE Id = @id;";
                    DbUtils.AddParameter(cmd, "@id", id);
                    Tag tag = null;
                    var reader = cmd.ExecuteReader();
                    if (reader.Read())
                    {
                            tag = new Tag()
                            {
                                Id = DbUtils.GetInt(reader,("Id")),
                                Name = DbUtils.GetString(reader,("Name")),
                            };

                    }
                    reader.Close();
                    return tag;
                    
                }
            }
        }

        public void Add(Tag tag)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO Tag (Name)
                                       OUTPUT INSERTED.ID
                                       VALUES (@Name);";
                    DbUtils.AddParameter(cmd, "@Name", tag.Name);

                    tag.Id = (int)cmd.ExecuteScalar();
                }
            }
        }

        //        public void Update(BeanVariety variety)
        //        {
        //            using (var conn = Connection)
        //            {
        //                conn.Open();
        //                using (var cmd = conn.CreateCommand())
        //                {
        //                    cmd.CommandText = @"
        //                        UPDATE BeanVariety 
        //                           SET [Name] = @name, 
        //                               Region = @region, 
        //                               Notes = @notes
        //                         WHERE Id = @id";
        //                    cmd.Parameters.AddWithValue("@id", variety.Id);
        //                    cmd.Parameters.AddWithValue("@name", variety.Name);
        //                    cmd.Parameters.AddWithValue("@region", variety.Region);
        //                    if (variety.Notes == null)
        //                    {
        //                        cmd.Parameters.AddWithValue("@notes", DBNull.Value);
        //                    }
        //                    else
        //                    {
        //                        cmd.Parameters.AddWithValue("@notes", variety.Notes);
        //                    }

        //                    cmd.ExecuteNonQuery();
        //                }
        //            }
        //        }

        public void Delete(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "DELETE FROM Tag WHERE Id = @id";
                    DbUtils.AddParameter(cmd, "@id", id);
                    cmd.ExecuteNonQuery();
                }
            }
        }
    }
}
