import { useNavigate } from 'react-router-dom';
import ajaxHelpers from '../API/ajaxHelpers';
import { useState, useEffect } from 'react';
import SinglePlayer from './SinglePlayer';
import NewPlayerForm from './NewPlayerForm';

export default function AllPlayers () {
    const [players, setPlayers] = useState([]);
    const navigate = useNavigate();
    
    useEffect (() => {
        const testplayers = async () => {
            const playerArray = await ajaxHelpers()
            // console.log(playerArray);
            setPlayers(playerArray.data.players);
        };
        testplayers();
    
    }, [players])
    
    return (
        <>
            <div className="container">
                {players.map((player) => {
                    return (
                        <div className="allPlayers" key={player.id}>
                            <h4>Hello! I'm {player.name}!</h4>
                            <img src={player.imageUrl}/>
                            <button onClick={() => navigate(`/players/${player.id}`)}>See Details!</button>
                        </div>
                    )
                })}
                <NewPlayerForm />
            </div> 
        </>
    );
}