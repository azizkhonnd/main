import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Usertable from './components/Usertable';
import Showtable from './components/Showtable';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/users" element={<Usertable />} />
        <Route path="/shows" element={<Showtable />} />
        <Route path="/" element={<h1></h1>} />
      </Routes>
    </div>
  );
}

export default App;
