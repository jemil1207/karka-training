
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login'
import Tudo from './components/Tudo'
function App() {
  return (
    <div className="App">

    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/tudo" element={<Tudo />} />
      </Routes>
    </Router>
    
    </div>
  );
}

export default App;
 