import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { deleteTag, getTagById } from "../../modules/tagManager";
import { useHistory, Link } from "react-router-dom";
import { Button } from "reactstrap";

const DeleteTag = () => {
    const history = useHistory();
    const [tag, setTag] = useState();
    const { id } = useParams();
    useEffect(() => {

        getTagById(id).then(setTag);
    }, [id]);

    if (!tag) {
        return null;
    }

    const handleDelete = (evt) => {
        evt.preventDefault();
        deleteTag(id).then((p) => {
            history.push("/tags");
        });
    };

    return (
        <div>
            <header>Are you sure you want to delete this tag?</header>
            <div>Tag: {tag.name}</div>
            <Button className="btn btn-primary" onClick={handleDelete}>Delete</Button>
            <Link to="/tags">Return to Index</Link>
        </div>
    )
};

export default DeleteTag;
