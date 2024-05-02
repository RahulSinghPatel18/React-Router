import axios from '../helpers/axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Entry = () => {
  const navigate = useNavigate()
  
  const submitHandler = ()=>{

  console.log("hello")
// send the data to the DB
// and Switch the page
navigate('/show')
}

const getposts = async () =>{
  try {
     // jsonplaceholde website me jake neeche user me jake link copy kro
     const { data } = await  axios.get("/posts")
  console.log( data )
  

  } catch (error) {
    console.log(error)
  }
}

  return (
    
   <div className='px-6 py-2  inline-block'>
     <h1 className='text-2xl '>Book Entries</h1>
     <button className='bg-green-300 py-2 px-5 my-3'
      onClick={getposts}>Get Posts
      </button>
      <br />
    <button onClick={submitHandler} className='bg-red-400 py-3 px-7 my-4'>
      Submit
    </button>
   </div>
      
  )
}

export default Entry
