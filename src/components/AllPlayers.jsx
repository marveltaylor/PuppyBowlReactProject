import { useNavigate } from 'react-router-dom';
import ajaxHelpers from '../API/ajaxHelpers'
import { useState, useEffect } from 'react';
import SinglePlayer from './SinglePlayer';

export default function AllPlayers () {
    const [players, setPlayers] = useState([]);
    const navigate = useNavigate();
    
    useEffect (() => {
        console.log(ajaxHelpers);
        const testplayers = async () => {
            const playerArray = await ajaxHelpers()
            console.log(playerArray);
            setPlayers(playerArray);
        };
        testplayers();
    
    }, [])

    console.log(players);
    return (
        <>
            <div>
                {players.map((player) => {
                    return (
                        <div key={player.id}>
                            <h4>Hello! I'm {player.name}!</h4>
                            <button onClick={() => navigate(`/players/${player.id}`)}>Click Here</button>
                        </div>
                    )
                })}
            </div> 
        </>
    );
}