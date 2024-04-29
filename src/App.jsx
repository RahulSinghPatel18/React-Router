
import  Routes from "./Routes/RoutesComponents"; // Import Routes and Route
import './App.css';
import Nav from "../src/Components/Navbar";
import RoutesComponents from "./Routes/RoutesComponents";
import axios from "axios";


const App= () =>{
  const getusers = async () =>{
    try {
       // jsonplaceholde website me jake neeche user me jake link copy kro
       const {data} = await  axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(data)

    } catch (error) {
      console.log(err)
    }
  }

  return (
    <div className='w-screen h-screen  bg-sky-100' >
      <Nav/>
    <RoutesComponents/>
    <hr /><hr />
    <button className="bg-blue-500 py-2 px-5 my-5" onClick={getusers}>Get Uers</button>
    </div>
  );
}

export default App;
