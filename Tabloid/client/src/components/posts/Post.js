import React from "react";
import { Card, CardBody } from "reactstrap";

const Post = ({ post }) => {
  return (
    <Card>
      <p>
        <small>Posted by: {post.userProfile.displayName}</small>
      </p>
      <CardBody>
        <p>
          <strong>Title: {post.title}</strong>
        </p>
        <p>Content: {post.content}</p>
      </CardBody>
    </Card>
  );
};
export default Post;
