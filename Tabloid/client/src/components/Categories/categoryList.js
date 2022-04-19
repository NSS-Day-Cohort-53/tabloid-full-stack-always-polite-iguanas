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
      <div className="row justify-content-center">
        <ListGroup>
          {categories.map((c) => {
            return (
              <ListGroupItem key={c.id}>
                {c.name} <Link to={`/categories/edit/${c.id}`}>Edit</Link>{" "}
                <Link to={`/categories/delete/${c.id}`}>Delete</Link>
              </ListGroupItem>
            );
          })}
        </ListGroup>
      </div>
    </div>
  );
};

export default CategoryList;
