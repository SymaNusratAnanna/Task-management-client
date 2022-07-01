
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import {Routes,Route} from "react-router-dom";
import Home from './Pages/Home/Home';
import CompletedTask from './Pages/Completed-task/CompletedTask';

import Calender from './Pages/Calender/Calender';
import Footer from './Pages/Shared/Footer';

import Tasks from './Pages/To-do/Tasks';


function App() {
  return (
    <div>
  
    
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/complete" element={<CompletedTask></CompletedTask>}></Route>
      <Route path="/tasks" element={<Tasks></Tasks>}></Route>
      <Route path="/calender" element={<Calender></Calender>}></Route>

      
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
