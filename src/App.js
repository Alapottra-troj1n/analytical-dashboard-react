
import { Routes,Route } from 'react-router-dom';
import './App.css';
import Modern from './components/Modern';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
          <Routes>
            <Route path='/' element={<Modern></Modern>}></Route>
          </Routes>
    </div>
  );
}

export default App;
