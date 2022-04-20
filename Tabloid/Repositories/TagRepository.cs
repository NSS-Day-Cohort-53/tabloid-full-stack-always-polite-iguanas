using System.Collections.Generic;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using Tabloid.Models;
using Tabloid.Utils;

namespace Tabloid.Repositories
{
    public class TagRepository : ITagRepository
    {
        private readonly string _connectionString;
        public TagRepository(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }

        private SqlConnection Connection
        {
            get { return new SqlConnection(_connectionString); }
        }

        public List<Tag> GetAll()
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = "SELECT Id, [Name] FROM Tag ORDER BY Name";
                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        var tags = new List<Tag>();
                        while (reader.Read())
                        {
                            tags.Add(new Tag()
                            {
                                Id = DbUtils.GetInt(reader,("Id")),
                                Name = DbUtils.GetString(reader,("Name")),
                            });
                        }
                            return tags;
                    };
                }
            }
        }

        public Tag Get(int id)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"
                        SELECT Id, [Name],
                          FROM BeanVariety
                         WHERE Id = @id;";
                    DbUtils.AddParameter(cmd, "@id", id);

                    using (SqlDataReader reader = cmd.ExecuteReader())
                    {
                        Tag tag = null;
                        if (reader.Read())
                        {
                            tag = new Tag()
                            {
                                Id = DbUtils.GetInt(reader,("Id")),
                                Name = DbUtils.GetString(reader,("Name")),
                            };

                        }

                        return tag;
                    }
                }
            }
        }

        //public void Add(BeanVariety variety)
        //{
        //    using (var conn = Connection)
        //    {
        //        conn.Open();
        //        using (var cmd = conn.CreateCommand())
        //        {
        //            cmd.CommandText = @"
        //                INSERT INTO BeanVariety ([Name], Region, Notes)
        //                OUTPUT INSERTED.ID
        //                VALUES (@name, @region, @notes)";
        //            cmd.Parameters.AddWithValue("@name", variety.Name);
        //            cmd.Parameters.AddWithValue("@region", variety.Region);
        //            if (variety.Notes == null)
        //            {
        //                cmd.Parameters.AddWithValue("@notes", DBNull.Value);
        //            }
        //            else
        //            {
        //                cmd.Parameters.AddWithValue("@notes", variety.Notes);
        //            }

        //            variety.Id = (int)cmd.ExecuteScalar();
        //        }
        //    }
        //}

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

        //        public void Delete(int id)
        //        {
        //            using (var conn = Connection)
        //            {
        //                conn.Open();
        //                using (var cmd = conn.CreateCommand())
        //                {
        //                    cmd.CommandText = "DELETE FROM BeanVariety WHERE Id = @id";
        //                    cmd.Parameters.AddWithValue("@id", id);

        //                    cmd.ExecuteNonQuery();
        //                }
        //            }
        //        }
        //    }
        //}

    }
}
