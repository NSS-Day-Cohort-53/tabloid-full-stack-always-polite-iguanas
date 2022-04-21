import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";
import { deleteComment } from "../../modules/commentManager";

const Comment = ({ comment }) => {
    const deletePostComment = (id) => {

    }

    return (
    <Card>
        <CardBody>
            <CardTitle><strong>{comment.subject}</strong></CardTitle>
            <CardText>{comment.content}</CardText>
            <Button className="btn btn-primary" onClick={deletePostComment(comment.id)}>Delete</Button>
         </CardBody>
    </Card>
)}

export default Comment;