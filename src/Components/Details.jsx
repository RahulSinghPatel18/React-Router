import React from 'react'
import { Link,useLocation,useNavigate, useParams } from 'react-router-dom'

const Details = () => {
  const {id} = useParams()
// routes me go ,back aane jane  ke liye
  const navigate = useNavigate()
// useLocation id yad na rakhna pade 
  const {pathname} = useLocation()
  console.log(location)
  return (
    <div className='p-4'>
      <h1 className='text-2xl '>Details</h1>
      <h1 className='text-xl mt-4'>
        Book Id : <span className='font-extrabold'>{id}</span>
      </h1>
      <br />
      <Link className=' px-6 py-3 bg-pink-500 rounded ' 
      to={`${pathname}/profile`}>
        Profile
      </Link>
      <br />
      <button className='px-6 py-3 bg-red-400 rounded mt-3 '
       onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}

export default Details
