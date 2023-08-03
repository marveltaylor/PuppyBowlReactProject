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
            const response = await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2303-acc-ct-web-pt-a/players/${id}`);
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
        <div className="singlePlayer">
            <h4>{playerId.name}</h4>
            <h4>{playerId.breed}</h4>
            <img src={playerId.imageUrl}/>
            <br/>
            <button className="delete-button" onClick={() => delete(`/players/${playerId.id}`)}>Remove Pup</button>
            <button onClick={() => navigate(`/players/${playerId.id}`)}>Go Back!</button>
        </div>
        </>
    );
}