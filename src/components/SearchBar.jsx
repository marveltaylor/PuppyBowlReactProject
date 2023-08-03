import React from 'react';
import { useState, useEffect } from 'react';

const SearchBar = ({ onSearch }) => {
    const [searchPup, setSearchPup] = useState("");
    return (
        <input type="text" placeholder="Search" onChange={(e) => onSearch(e.target.value)}/>
    );
}

export default SearchBar;

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// export default function SearchBar (id) {
// const [players, setPlayers] = useState([]);
// const [search, setSearch] = useState("");
// const navigate = useNavigate();

//     navigate(`/view/${id}`);

//     useEffect(() => {
//         async function fetchAllPlayers() {
//             const response = await apifetchAllPlayers();
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