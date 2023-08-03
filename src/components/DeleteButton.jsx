import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { handleDelete} from "../API/ajaxHelpers.js"

export default function DeleteButton () {
    const {id} = useParams();

    const handleDelete = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2303-acc-ct-web-pt-a/players/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(),
            })
            const result = await response.json();
            console.log(result);
            if (result.error) throw result.error;
        } catch (err) {
            console.error("Oops! Something went wrong with deleting that player!", err);
        }
    };

    return (
        <>
        <button onClick={handleDelete}>Remove Player</button>
        </>
    );
};