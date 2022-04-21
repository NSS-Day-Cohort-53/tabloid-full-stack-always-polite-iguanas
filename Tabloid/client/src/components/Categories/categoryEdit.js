import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { updateCategory } from "../../modules/categoryManager";
import { getCategoryById } from "../../modules/categoryManager";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";


const EditCategory = () => {
    const history = useHistory();
    const { id } = useParams();
    const [category, setCategory] = useState({});

    useEffect(() => {
        getCategoryById(id).then(setCategory);
      }, [id]);

      const handleInputChange = (evt) => {
        const value = evt.target.value;
        const key = evt.target.id;
    
        const categoryCopy = { ...category };
    
        categoryCopy[key] = value;
        setCategory(categoryCopy);
      };
      const handleSave = (evt) => {
        evt.preventDefault();
        updateCategory(category).then(() => {
          history.push("/categories");
        });
      };
      return (
        <Form>
            <FormGroup>
                <Label for="name">Name</Label>
                <Input type="text" name="name" id="name" value={category.name} onChange={handleInputChange}/>
            </FormGroup>
            <Button className="btn btn-primary" onClick={handleSave}>Submit</Button>
        </Form>
    )


}
export default EditCategory;