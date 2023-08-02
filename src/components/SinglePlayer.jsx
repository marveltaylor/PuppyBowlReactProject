import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function SinglePlayer () {
    let {id} = useParams();

    const [playerId, setPlayerId] = useState({})
    useEffect (() => {     
        const fetchSinglePlayer = async () => {
        try {
            const response = await fetch (`${APIURL}/players/${id}`);
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
        </div>
        </>
    );
}