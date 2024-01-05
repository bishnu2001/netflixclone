import { useState } from 'react';
import viteLogo from '/vite.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Netflix from './pages/Netflix';
import Player from './components/Player';
import Movies from './pages/Movies';
import Tvshows from './pages/Tvshows';
import Userliked from './pages/Userliked';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Netflix />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/player" element={<Player />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv" element={<Tvshows />} />
          <Route path="/mylists" element={<Userliked />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
