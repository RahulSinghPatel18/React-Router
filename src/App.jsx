// import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import './App.css';
import Nav from "../src/Components/Navbar";
import Home from "../src/Components/Home";
import Entry from "../src/Components/Entry";
import Library from "../src/Components/Library";

function App() {
  return (
    <div className='w-screen h-screen' >
      <Nav/>
      <Routes >
        <Route path="/"  element={<Home/>}  />
        <Route path="/create" element={<Entry/>} />
        <Route path="/show" element={<Library/>} />
        
      </Routes>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  );
}

export default App;
