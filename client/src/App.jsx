import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Reception from "./components/Reception";
import RSVP from "./components/RSVP";
import Gallery from "./components/Gallery";

const App = () => {
  const [ bool, setBool ] = useState(false);

  function langSel() {
    const el = document.getElementById("lang");
    setBool(el.checked);
  }

  return (
    <>
      <NavBar bool={bool} set={langSel}/>
      <div>
        <Routes>
            <Route path="/" element={<Home bool={bool}/>}/>
            <Route path="/Gallery" element={<Gallery bool={bool}/>}/>
            <Route path="/Reception" element={<Reception bool={bool}/>}/>
            <Route path="/RSVP"  element={<RSVP bool={bool}/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App;