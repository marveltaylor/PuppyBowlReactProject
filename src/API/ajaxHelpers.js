const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/2303-acc-ct-web-pt-a/players`;

const fetchAllPlayers = async () => {
    try {
        const response = await fetch (`https://fsa-puppy-bowl.herokuapp.com/api/2303-acc-ct-web-pt-a/players`);
        const result = await response.json();
        if (result.error) throw result.error;
        return result;
    } catch (err) {
        console.error("Uh oh, trouble fetching players!", err);
    }
};

export default fetchAllPlayers