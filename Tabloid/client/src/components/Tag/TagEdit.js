import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { updateTag } from "../../modules/tagManager";
import { getTagById } from "../../modules/tagManager";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";


const EditTag = () => {
    const history = useHistory();
    const { id } = useParams();
    const [tag, setTag] = useState({ name: "" });

    useEffect(() => {
        getTagById(id).then(setTag);
    }, [id]);

    const handleInputChange = (evt) => {
        const value = evt.target.value;
        const key = evt.target.id;

        const tagCopy = { ...tag };

        tagCopy[key] = value;
        setTag(tagCopy);
    };
    const handleSave = (evt) => {
        evt.preventDefault();
        updateTag(tag).then(() => {
            history.push("/tags");
        });
    };
    return (
        <Form>
            <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="name" id="name" value={tag.name} onChange={handleInputChange} />
            </FormGroup>
            <Button className="btn btn-primary" onClick={handleSave}>Submit</Button>
        </Form>
    )


}
export default EditTag;

//test