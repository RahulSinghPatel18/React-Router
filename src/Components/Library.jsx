import React from 'react'
import { Link , Outlet } from 'react-router-dom'
const Library = () => {
  return (
    <div className='px-6 py-2 w-[30%] bg-green-300 rounded  border inline-block'>
      <h1 className='text-2xl'>Library</h1>
      <ul className='m-3  list-none inline-block'>
       
      <li className='list-item bg-yellow-200 p-2 my-1 rounded '>
          <Link to="/show/1">Book 1</Link>
        </li>
        <li className='list-item bg-yellow-200 p-2 my-1 rounded'>
          <Link to="/show/2">Book 2</Link>
        </li>
        <li className='list-item bg-yellow-200 p-2  my-1 rounded'>
          <Link to="/show/3">Book 3</Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </div>
  )
}

export default Library
