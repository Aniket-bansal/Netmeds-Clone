import './App.css';
import Navbar from './day-2/Navbar'
import { Route, Routes } from 'react-router-dom';
import Homepage from './day-2/Homepage';
import Footer from './day-3/Footer';
import AboutUs from './day-3/AboutUs';
import LoweNav from './day-2/LoweNav';
import TermAndCondition from './day-3/TermAndCondition';
import Login from './day-3/Login';
import Cart from './day-3/Cart';
import { useState } from 'react';
import Wellness from './day-4/Wellness';

function App() {
  const [toggle,setToggle] = useState(false)
  return (
    <div className="App">
      <Navbar toggle={toggle} />
      <LoweNav/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/terms" element={<TermAndCondition/>}/>
        <Route path="/login" element={<Login setToggle={setToggle} />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/wellness" element={<Wellness />}/>
      </Routes>
    <Footer />
    </div>
  );
}

export default App;
