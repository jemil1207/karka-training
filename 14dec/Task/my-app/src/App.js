import logo from './logo.svg';
import './App.css';
import Cart from "./components/cart.js"
import Button from './components/Button.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/Cart' element={<Cart />} /> 
        </Routes>
      </Router>
      <div className="App">
        <Button />
      </div>
    </>
  )
}

export default App;
