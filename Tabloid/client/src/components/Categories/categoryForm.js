import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FormGroup, Input, Label, Button, Form } from "reactstrap";
import { addCategory } from "../../modules/categoryManager";

const CategoryForm = () => {
  const history = useHistory();
  const emptyCategory = {
    Name: "",
  };

  const [category, setCategory] = useState(emptyCategory);

  const handleInputChange = (evt) => {
    const value = evt.target.value;
    const key = evt.target.id;

    const categoryCopy = { ...category };

    categoryCopy[key] = value;
    setCategory(categoryCopy);
  };
  const handleSave = (evt) => {
    evt.preventDefault();
    addCategory(category).then((p) => {
      history.push("/categories");
    });
  };

  return (
      <Form>
          <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="name" id="name" placeholder="category name" value={category.name} onChange={handleInputChange}/>
          </FormGroup>
          <Button className="btn btn-primary" onClick={handleSave}>Submit</Button>
      </Form>
  )
};

export default CategoryForm;
