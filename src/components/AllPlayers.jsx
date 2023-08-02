import ajaxHelpers from '../API/ajaxHelpers'
import { useState, useEffect } from 'react';

export default function AllPlayers () {
    const [players, setPlayers] = useState([]);
    
    useEffect (() => {
        console.log(ajaxHelpers);
        const testplayers = async () => {
            const playerArray = await ajaxHelpers()
            console.log(playerArray);
            setPlayers(playerArray);
        };
        testplayers();
    
        // async function fetchPlayers () {
        //     try {
        //         const response = await fetch (`${APIURL}/players`);
        //         const result = await response.json();
        //         setPlayers();
        //     } catch (error) {
        //         console.log(error);
        //     }
        // }
        // fetchPlayers();
    }, [])

    console.log(players);
    return (
        <>
            <div>
                {players.map((player) => {
                    return (
                        <div>
                            <h4>{player.name}</h4>
                        </div>
                    )
                })}
            </div> 
        </>
    );
}