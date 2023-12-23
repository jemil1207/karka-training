import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Reg from './components/Reg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/reg' element={<Reg/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
