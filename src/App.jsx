// import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import './App.css';
import Nav from "../src/Components/Navbar";
import Home from "../src/Components/Home";
import Entry from "../src/Components/Entry";
import Library from "../src/Components/Library";

function App() {
  return (
    <div className='w-screen h-screen  bg-sky-100' >
      <Nav/>
      <Routes>
        <Route path="/"  element={<Home/>}  />
        <Route path="/create" element={<Entry/>} />
        <Route path="/show" element={<Library/>} />
        
      </Routes>
     
    </div>
  );
}

export default App;
