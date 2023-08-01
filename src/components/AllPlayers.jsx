import ajaxHelpers from './API/ajaxHelpers'
import { useState, useEffect } from 'react';

export default function AllPlayers () {
    const [players, setPlayers] = useState([]);
    
    useEffect (() => {

    }, [])

    return (
        <>
            <AllPlayers players={players} setPlayers={setPlayers}/>
        </>
    );
}