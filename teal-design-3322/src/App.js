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
import Profile from './day-4/Profile';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Checkout from './day-5/Checkout';
import Placed from './day-5/Placed';
import LabTest from './day-5/LabTest';
import Error from './day-5/Error';

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
        <Route path="/cart" element={<PrivateRoute><Cart /></PrivateRoute>}/>
        <Route path="/wellness" element={<Wellness />}/>
        <Route path="/profile" element={<PrivateRoute><Profile setToggle={setToggle} /></PrivateRoute>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/placed" element={<Placed />}/>
        <Route path="/health-packages" element={<LabTest/>}/>
        <Route path="/*" element={<Error />}/>
      </Routes>
    <Footer />
    </div>
  );
}

export default App;
