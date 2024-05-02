import axios from "./helpers/axios";
import './App.css';
import Nav from "../src/Components/Navbar";
import RoutesComponents from "./Routes/RoutesComponents";



const App= () =>{

  return (
    <div className='w-screen h-screen  bg-sky-100' >
      <Nav/>
      <hr />
    <RoutesComponents/>
    <hr /><hr />
   
    </div>
  );
}

export default App;
