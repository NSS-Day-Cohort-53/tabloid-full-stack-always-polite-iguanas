import React from "react";
import { Card, CardBody } from "reactstrap";
import { useState, useEffect } from "react";
import { getPostById } from "../../modules/postManager";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const [post, setPosts] = useState({});
  const { postId } = useParams();

  const getPosts = (id) => {
    getPostById(id).then((post) => setPosts(post));
  };

  useEffect(() => {
    getPosts(postId);
  }, [postId]);
  return (
    <Card>
      <p>
        <strong>Title: {post.title}</strong>
      </p>
      <p>Posted by: {post.userProfile?.displayName}</p>
      <CardBody>
        {post.imageLocation !== null ? (
          <img src={post.imageLocation} alt="header" />
        ) : (
          ""
        )}
        <p />
        <p>{post.content}</p>
      </CardBody>
      <p>Published On: {post.publishDateTime}</p>
    </Card>
  );
};
export default PostDetails;
