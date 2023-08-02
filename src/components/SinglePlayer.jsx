import { useState, useEffect } from "react";

export default function SinglePlayer () {
    const [playerID, setPlayerId] = useState({})
    useEffect (() => {     
        const fetchSinglePlayer = async () => {
        try {
            const response = await fetch (`${APIURL}/player/${id}`);
            const result = await response.json();
            setPlayerId(result.data.player)
            if (result.error) throw result.error;
        } catch (err) {
            console.error("Uh oh, trouble fetching the player!", err);
        }
    };
    

    }, []);

    return (
        <>
        <h2>Bye!</h2>
        </>
    );
}