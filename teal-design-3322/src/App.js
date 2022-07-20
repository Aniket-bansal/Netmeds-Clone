import './App.css';
import Navbar from './day-2/Navbar'
import { Route, Routes } from 'react-router-dom';
import Homepage from './day-2/Homepage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
