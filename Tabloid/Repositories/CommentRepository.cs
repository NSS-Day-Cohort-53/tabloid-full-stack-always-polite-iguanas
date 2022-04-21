using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using Tabloid.Models;
using Tabloid.Utils;

namespace Tabloid.Repositories
{
    public class CommentRepository : BaseRepository, ICommentRepository
    {
        public CommentRepository(IConfiguration configuration) : base(configuration) { }

        public void Add(Comment comment)
        {
            using (var conn = Connection)
            {
                conn.Open();
                using (var cmd = conn.CreateCommand())
                {
                    cmd.CommandText = @"INSERT INTO Comment (PostId, UserProfileId, Subject, Content, CreateDateTime)
                                        OUTPUT INSERTED.ID
                                        VALUES (@PostId, @UserProfileId, @Subject, @Content, @CreateDateTime)";
                    DbUtils.AddParameter(cmd, "@PostId", comment.PostId);
                    DbUtils.AddParameter(cmd, "@UserProfileId", comment.UserProfileId);
                    DbUtils.AddParameter(cmd, "@Subject", comment.Subject);
                    DbUtils.AddParameter(cmd, "@Content", comment.Content);
                    DbUtils.AddParameter(cmd, "@CreateDateTime", comment.CreateDateTime);

                    comment.Id = (int)cmd.ExecuteScalar();
                }
            }
        }
    }
}