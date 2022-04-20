import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FormGroup, Input, Label, Button, Form } from "reactstrap";
import { addComment } from "../../modules/commentManager";
import { useParams } from "react-router-dom";

const CommentForm = () => {
  const history = useHistory();
  const { postId } = useParams();
  const emptyComment = {
    PostId: 1,
    Subject: "",
    Content: ""
  };

  const [comment, setComment] = useState(emptyComment);

  const handleInputChange = (evt) => {
    const value = evt.target.value;
    const key = evt.target.id;

    const commentCopy = { ...comment };

    commentCopy[key] = value;
    setComment(commentCopy);
  };
  const handleSave = (evt) => {
    evt.preventDefault();
    const commentCopy = { ...comment };
    commentCopy.PostId = parseInt(postId);
    addComment(commentCopy).then(() => {
      history.push(`/posts/${postId}`);
    });
  };

  const SubmitButton = () => {
    if (comment.Subject && comment.Content){
      return <Button className="btn btn-primary" onClick={handleSave}>Submit</Button>
    } else {
      return <button type="button" disabled>Button</button>
    };
  };

  return (
      <Form>
          <FormGroup>
              <Label for="Subject">Subject</Label>
              <Input type="text" name="subject" id="Subject" placeholder="subject" value={comment.Subject} onChange={handleInputChange}/>
          </FormGroup>
          <FormGroup>
              <Label for="Content">Content</Label>
              <Input type="text" name="Content" id="Content" placeholder="Content" value={comment.Content} onChange={handleInputChange}/>
          </FormGroup>
          <SubmitButton />
      </Form>
  )
};

export default CommentForm;