import ajaxHelpers from '../API/ajaxHelpers'
import { useState, useEffect } from 'react';

export default function AllPlayers () {
    const [players, setPlayers] = useState([]);
    
    useEffect (() => {
        console.log(ajaxHelpers);
        const testplayers = async () => {
            const playerArray = await ajaxHelpers()
            // console.log(playerArray);
            setPlayers(playerArray);
        };
        testplayers();
    }, [])

    // console.log(players);
    return (
        <>
            
        </>
    );
}