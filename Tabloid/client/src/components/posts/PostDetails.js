import React from "react";
import { Button, Card, CardBody, ListGroup, ListGroupItem } from "reactstrap";
import { useState, useEffect } from "react";
import { getPostById } from "../../modules/postManager";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Comment from "../Comments/Comment";
import { getAllPostComments } from "../../modules/commentManager";

const PostDetails = () => {
  const [post, setPost] = useState({});
  const { postId } = useParams();
  const [comments, setComments] = useState([]);
  const getPosts = (id) => {
    getPostById(id).then((postFetched) => setPost(postFetched));
  };

  useEffect(() => {
    getPosts(postId);
  }, [postId]);

  const getComments = (id) => {
    getAllPostComments(id).then(comments => setComments(comments));
  };

  useEffect(() => {
      getComments(postId)
  }, []);

  return (
    <div>
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
      <div>
        <h2>Comments</h2>
        <ListGroup>
      {comments.map(comment => {
        return (
          <ListGroupItem key={comment.id}>
        <Comment comment={comment} postId={postId} getComments={getComments}/>
        </ListGroupItem>
        )})}
      </ListGroup>
      </div>
    </div>
  );
};
export default PostDetails;