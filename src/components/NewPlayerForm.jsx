import { useState } from "react";

export default function NewPlayerForm () {
    const [newPlayer, setNewPlayer] = useState("");

    function handleSubmit (e) {
        e.preventDefault();
        console.log(newPlayer);
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>New Player: {""}
                <input value={newPlayer} onChange={(e) => {setNewPlayer(e.target.value);
                }}>
                </input>
            </label>
            <button type="submit">Submit</button>
        </form>
        </>
    );
}