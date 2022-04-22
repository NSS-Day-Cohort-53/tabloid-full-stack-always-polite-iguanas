import React, { useEffect, useState } from "react";
import Post from "./Post";
import { getMyPosts } from "../../modules/postManager";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    getMyPosts().then((posts) => setPosts(posts));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <ListGroup>
          {posts.map((post) => {
            return (
              <ListGroupItem key={post.id}>
                <Post post={post} />
                <p>
                  <small>Category: {post?.category.name}</small>
                </p>
                <Link to={`/posts/${post.id}`}>Details</Link>
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </div>
    </div>
  );
};

export default PostList;
