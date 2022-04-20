import React, { useEffect, useState } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { getAllCategories } from "../../modules/categoryManager";
import { Link } from "react-router-dom";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    getAllCategories().then((data) => setCategories(data));
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="container">
      <Link to="/categories/new">Create New Category</Link>
      <div className="row justify-content-center">
        <ListGroup>
          {categories.map((c) => {
            if (c.name != "No Category") {
              return (
                <ListGroupItem key={c.id}>
                  {c.name} <Link to={`/categories/edit/${c.id}`}>Edit</Link>{" "}
                  <Link to={`/categories/delete/${c.id}`}>Delete</Link>
                </ListGroupItem>
              );
            } else {
              return <ListGroupItem key={c.id}>{c.name}</ListGroupItem>;
            }
          })}
        </ListGroup>
      </div>
    </div>
  );
};

export default CategoryList;
