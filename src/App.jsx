import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';
import NewPlayerForm from './components/NewPlayerForm';
import SearchBar from './components/SearchBar';
import DeleteButton from './components/DeleteButton';

function App() {
  

  return (
    <>
    {/* <NavBar /> */}
    <Routes>
      <Route path ="/" element={<AllPlayers />}/>
      <Route path="/players/:id" element={<SinglePlayer />} />
      <Route path="/" element={<NewPlayerForm />} />
      {/* <Route path="/" element={<DeleteButton />} />
      <Route path="/players/:id" element={<SearchBar />} /> */}
    </Routes>
    </>
  );
}

export default App
