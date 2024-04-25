import React from 'react'
import { Link } from 'react-router-dom'
// import Nav from "../src/Components/Navbar";

const Navbar = () => {
  return (
  
      <nav className='w-full flex justify-center  gap-5'>
        <Link to="/">Home</Link>
        <Link to="/create">Book Entry</Link>
        <Link to="/show">Library</Link>
      </nav>
      
  )
}

export default Navbar
