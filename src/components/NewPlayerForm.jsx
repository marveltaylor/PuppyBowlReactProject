import { useState } from "react";

export default function NewPlayerForm () {
    const [newPlayer, setNewPlayer] = useState("");
    const [breed, setBreed] = useState ("");
    const [imageUrl, setImageUrl] = useState ("");
    const [status, setStatus] = useState ("");

        async function handleSubmit(event) {
            event.preventDefault();
            try {
                const response = await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2303-acc-ct-web-pt-a/players`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: newPlayer,
                        breed: breed,
                        imageUrl: imageUrl,
                        status: status,
                    }),
                });
                const result = await response.json();
                console.log(result)
                setNewPlayer("");
                setBreed("");
                setImageUrl("");
                setStatus("");
                if (result.error) throw result.error;
            } catch (err) {
                console.error('Oops, something went wrong with adding that player!', err);
            }
        };

    return (
        <>
        <form className="card-footer" method="post" onSubmit={handleSubmit}>
            <h2>Add a New Player!</h2>
            <label>Name: {""}
                <input value={newPlayer} onChange={(e) => {setNewPlayer(e.target.value);
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

            <div>
                <select value={status} onChange={(e) => {setStatus(e.target.value)}}>
                    <option value="none">None</option>
                    <option value="bench">Bench</option>
                    <option value="field">Field</option>
                </select>
            </div>
    
            <button className="submit" type="submit">Submit Form</button>
        </form>
        </>
    );
}