import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ajaxHelpers from '../API/ajaxHelpers';

export default function SinglePlayer () {
    let {id} = useParams();

    const [playerId, setPlayerId] = useState({})
    useEffect (() => {     
        const fetchSinglePlayer = async () => {
        try {
            const response = await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players/${id}`);
            const result = await response.json();
            setPlayerId(result.data.player)
            if (result.error) throw result.error;
        } catch (err) {
            console.error("Uh oh, trouble fetching the player!", err);
        }
    };
    fetchSinglePlayer();

    }, []);

    return (
        <>
        <div>
            <h4>{playerId.name}</h4>
            <h4>{playerId.id}</h4>
            <h4>{playerId.breed}</h4>
            <h4>{playerId.status}</h4>
            <img src={playerId.imageUrl} />
        </div>
        </>
    );
}