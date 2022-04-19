import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCategoryById } from "../../modules/categoryManager";

const DeleteCategory = () => {
    const [category, setCategory] = useState();
    const { id } = useParams();

    useEffect(() => {
        getCategoryById(id).then(setCategory);
    }, []);

    if (!category) {
        return null;
    }

    const handleDelete = (evt) => {
        evt.preventDefault();
        
    }
}

export default DeleteCategory