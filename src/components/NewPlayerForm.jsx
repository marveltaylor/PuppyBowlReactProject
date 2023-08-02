import { useEffect, useState } from "react";

export default function NewPlayerForm () {
    const [newPlayer, setNewPlayer] = useState("");
    const [name, setName] = useState({});
    const [breed, setBreed] = useState ({});
    const [imageUrl, setImageUrl] = useState ({});

    useEffect (() => {
        const addNewPlayer = async (newPlayer) => {
            try {
                const response = await fetch (`${APIURL}/players`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newPlayer),
                });
                const result = await response.json();
                setNewPlayer(result.data.player)
                if (result.error) throw result.error;
            } catch (err) {
                console.error('Oops, something went wrong with adding that player!', err);
            }
        };
        addNewPlayer();
    }, []);

     function handleSubmit (e) {
         e.preventDefault();
         console.log(newPlayer);
    }

    return (
        <>
        <form method="post" onSubmit={handleSubmit}>
            <h3>Add a New Player!</h3>
            <label>Name: {""}
                <input value={name} onChange={(e) => {setName(e.target.value);
                }}>
                </input>
            </label>

            <label>Breed: {""}
                <input value={breed} onChange={(e) => {setBreed(e.target.value);
                }}>
                </input>
            </label>

            <label>ImageUrl: {""}
                <input value={imageUrl} onChange={(e) => {setImageUrl(e.target.value);
                }}>
                </input>
            </label>
            
            <button type="reset">Reset Form</button>
            <button type="submit">Submit Form</button>
        </form>
        </>
    );
}