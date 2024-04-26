import React from 'react'
import {NavLink, Link } from 'react-router-dom'
// import Nav from "../src/Components/Navbar";

const Navbar = () => {
  return (

    <nav className='w-full flex justify-center p-5 bg-blue-200 gap-[8%]'>
      <NavLink className={(e) => (e.isActive ? "text-red-400" : "")}
     to="/"> Home

     </NavLink>
 
     <NavLink className={(e) => (e.isActive ? "text-red-400" : "")}
     to="/Create"> Book Entry

     </NavLink>
 
     <NavLink className={(e) => (e.isActive ? "text-red-400" : "")}
     to="/show"> Library

     </NavLink>
 



  </nav>
  
  )
}

export default Navbar
