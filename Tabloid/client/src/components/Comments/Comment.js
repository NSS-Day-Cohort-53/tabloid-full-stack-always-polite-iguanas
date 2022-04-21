import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

const Comment = ({ comment }) => {
    return (
    <Card>
        <CardBody>
            <CardTitle><strong>{comment.subject}</strong></CardTitle>
            <CardText>{comment.content}</CardText>
         </CardBody>
    </Card>
)}

export default Comment;