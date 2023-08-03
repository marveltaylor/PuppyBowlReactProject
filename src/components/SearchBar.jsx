// import React from 'react';
// // import { useState, useEffect } from 'react';

// // const SearchBar = ({ onSearch }) => {
// //     const [searchPup, setSearchPup] = useState("");

// //     const handleSearch = (searchPlayer) => {
// //         searchPup(searchPlayer);

// //     };
// //     return (
// //         <>
// //         <div>
// //             <SearchBar onSearch={handleSearch} />
// //         </div>
// //         <input type="text" placeholder="Search" onChange={(e) => onSearch(e.target.value)}/>
// //         </>
// //     );
// // }

// // export default SearchBar;

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// export default function SearchBar (id) {
// const [players, setPlayers] = useState([]);
// const [search, setSearch] = useState("");
// const navigate = useNavigate();

//     navigate(`/view/${id}`);

//     useEffect(() => {
//         async function fetchAllPlayers() {
//             const response = await fetchAllPlayers();
//             if (search) {
//                 const filteredPlayers = response.filter((item) => item.name === search);
//                 setPlayers(filteredPlayers);
//             } else {
//                 setPlayers(response);
//             }
//             console.log(response);
//         }
//         fetchAllPlayers();
//     }, [search]);

//     return (
//         <>
//         <SearchBar setSearch={setSearch} />
//         </>
//     );
// };

import React from "react";
import { useState } from "react";

const SearchBar = ({}) => {
    const[searchPlayer, setSearchPlayer] = useState("");
    
    const handleInputChange = (event) => {
        setSearchPlayer(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        //pass the searchPlayer to the parent component
        onSearch(searchPlayer);
    };

    return (
        <form onSubmit={{handleFormSubmit}}>
            <input
            type="text"
            placeholder="Search..."
            value={searchPlayer}
            onChange={handleInputChange}
            />
            <button type="submit">Search</button>
        </form>
    );
};