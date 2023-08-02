const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/2302-acc-ct-web-a/`;

const fetchAllPlayers = async () => {
    try {
        const response = await fetch (`${APIURL}/players`);
        const result = await response.json();
        if (result.error) throw result.error;
        return result.data.players;
    } catch (err) {
        console.error("Uh oh, trouble fetching players!", err);
    }
};

export default fetchAllPlayers