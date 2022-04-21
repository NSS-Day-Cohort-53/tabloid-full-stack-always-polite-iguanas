import React from "react";
import { Button, Card, CardBody } from "reactstrap";
import { useState, useEffect } from "react";
import { getPostById } from "../../modules/postManager";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const PostDetails = () => {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  const getPosts = (id) => {
    getPostById(id).then((postFetched) => setPost(postFetched));
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
      <Button>
      <Link to={`/posts/newComment/${post.id}`}>Add a comment</Link>
      </Button>
    </Card>
  );
};
export default PostDetails;
