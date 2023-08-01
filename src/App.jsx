import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AllPlayers from './components/AllPlayers';

function App() {
  

  return (
    <>
    <NavBar />
    <Routes>
      <Route path ="/" element={<AllPlayers />}>

      </Route>
    </Routes>
    </>
  );
}

export default App
