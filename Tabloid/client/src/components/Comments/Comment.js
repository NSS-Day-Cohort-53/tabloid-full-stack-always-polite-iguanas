import React from "react";
import { Card, CardBody, CardText, CardTitle, Button } from "reactstrap";
import { deleteComment } from "../../modules/commentManager";

const Comment = ({ comment, postId, getComments }) => {
    const handleDelete = (evt) => {
        evt.preventDefault();
        deleteComment(comment.id).then(() => {
          getComments(postId)
        });
      };

    return (
    <Card>
        <CardBody>
            <CardTitle><strong>{comment.subject}</strong></CardTitle>
            <CardText>{comment.content}</CardText>
            <Button className="btn btn-primary" onClick={handleDelete}>Delete</Button>
         </CardBody>
    </Card>
)}

export default Comment;