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

  return (
    
   <div className='flex gap-2 '>
     <div className='px-6 py-2 bg-green-300 rounded  border inline-block'>
      <h1>Entry</h1>
    </div>
    <button onClick={submitHandler} className='bg-red-300 py-3 px-7'>
      Submit
    </button>
   </div>
      
  )
}

export default Entry
