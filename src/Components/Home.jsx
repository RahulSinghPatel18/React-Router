import { useState } from 'react'
import axios from '../helpers/axios'


const Home = () => {
  const [users, setusers] = useState([])
  const getusers = async () =>{
    try {
       // jsonplaceholde website me jake neeche user me jake link copy kro
       const { data } = await  axios.get("/users")
       setusers(data)
    console.log( data )

    } catch (error) {
      console.log(error)
    }
  }

let renderusers = "Loading..."
  if(users.length > 0){
       renderusers = users.map((user )=> <div className="border  bg-sky-200 p-3 mr-2 mb-3" key={user.id}>
        <h1 className='text-xl'>{user.name}</h1>
        <small>{user.email}</small>
       </div>)
  }

  return (
    <div className='px-6 py-2  inline-block'>
      <h1 className='text-2xl'>HomePage</h1>
      <button className="bg-blue-500 py-2 px-5 my-5" 
      onClick={getusers}>Get Users
      </button><hr />
      <div className='flex flex-wrap '>{renderusers}</div>
    </div>
  )
}

export default Home
