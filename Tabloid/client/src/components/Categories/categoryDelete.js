import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { deleteCategory, getCategoryById } from "../../modules/categoryManager";
import { useHistory, Link } from "react-router-dom";
import { Button } from "reactstrap";

const DeleteCategory = () => {
  const history = useHistory();
  const [category, setCategory] = useState();
  const { id } = useParams();

  useEffect(() => {
    getCategoryById(id).then(setCategory);
  }, [id]);

  if (!category) {
    return null;
  }

  const handleDelete = (evt) => {
    evt.preventDefault();
    deleteCategory(id).then((p) => {
      history.push("/categories");
    });
  };

  return (
      <div>
          <header>Are you sure you want to delete this category?</header>
          <div>Category: {category.name}</div>
          <Button className="btn btn-primary" onClick={handleDelete}>Delete</Button>
          <Link to="/categories">Return to Index</Link>
      </div>
  )
};

export default DeleteCategory;
