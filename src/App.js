import './App.css';
import { Routes, Route,  } from "react-router-dom";
import Navbar from './Pages/Shared/Navbar/Navbar.jsx';
import About from './Pages/About/About.jsx'
import Home from './Pages/Home/Home.jsx'
import Login from './Pages/Login/Login.jsx'
import Appointment from './Pages/Appointment/Appointment.jsx';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
       <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    
    </div>
  );
}

export default App;
