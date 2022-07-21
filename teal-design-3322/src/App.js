import './App.css';
import Navbar from './day-2/Navbar'
import { Route, Routes } from 'react-router-dom';
import Homepage from './day-2/Homepage';
import Footer from './day-3/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>}/>
      </Routes>
    <Footer />
    </div>
  );
}

export default App;
