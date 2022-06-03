
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Modern from './components/Modern';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="grid grid-cols-[15%,85%]">
        <Sidebar />
        <div className="bg-gray-50">
          <Navbar />
          <Routes>
            <Route path='/' element={<Modern></Modern>}></Route>
          </Routes>
        </div>
      </div>

    </div>
  );
}

export default App;
