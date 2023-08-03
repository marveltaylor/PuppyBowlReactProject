import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ajaxHelpers from '../API/ajaxHelpers';

export default function SinglePlayer () {
    let {id} = useParams();
    const navigate = useNavigate();

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
            <img src={playerId.imageUrl}/>
            <button className="delete-button" onClick={() => delete(`/players/${playerId.id}`)}>Remove Pup</button>
            <button onClick={() => navigate(`/players/${playerId.id}`)}>Go Back!</button>
        </div>
        </>
    );
}