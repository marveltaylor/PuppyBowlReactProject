import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AllPlayers from './components/AllPlayers';
import SinglePlayer from './components/SinglePlayer';

function App() {
  

  return (
    <>
    {/* <NavBar /> */}
    <Routes>
      <Route path ="/" element={<AllPlayers />}/>
      <Route path="/players/:id" element={<SinglePlayer />} />
    </Routes>
    </>
  );
}

export default App
