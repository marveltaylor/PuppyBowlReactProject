import ajaxHelpers from './API/ajaxHelpers'
import { useState, useEffect } from 'react';

export default function AllPlayers () {
    const [players, setPlayers] = useState([]);
    
    useEffect (() => {
        async function fetchPlayers () {
            try {
                const response = await fetch (`${APIURL}/players`);
                const result = await response.json();
                setPlayers();
            } catch (error) {
                console.log(error);
            }
        }
        fetchPlayers();
    }, [])

    return (
        <>
            
        </>
    );
}