import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FormGroup, Input, Label, Button, Form } from "reactstrap";
import { addTag } from "../../modules/tagManager";

const TagForm = () => {
    const history = useHistory();
    const emptyTag = {
        name: "",
    };

    const SubmitButton = () => {
        if (tag.name) {
            return <Button className="btn btn-primary" onClick={handleSave}>Submit</Button>
        } else {
            return <button type="button" disabled>Submit</button>
        }
    }

    const [tag, setTag] = useState(emptyTag);

    const handleInputChange = (evt) => {
        const value = evt.target.value;
        const key = evt.target.id;

        const tagCopy = { ...tag };

        tagCopy[key] = value;
        setTag(tagCopy);
    };
    const handleSave = (evt) => {
        evt.preventDefault();
        addTag(tag).then(() => {
            history.push("/tags");
        });
    };

    return (
        <Form>
            <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="name" id="name" placeholder="tag name" value={tag.name} onChange={handleInputChange} />
            </FormGroup>
            <SubmitButton />
        </Form>
    )
};

export default TagForm;


//test