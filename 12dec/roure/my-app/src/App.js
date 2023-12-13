import logo from './logo.svg';
import './App.css';
import Profile from './profile.js';
import Home from './Home.js';
import {BrowserRouter as Router,Route,Link,Routes} from "react-router-dom"
function App() {
  const isAuthorized=false;
  return (
   <div> 
    <Router>
      
      <Routes>

        {
        <Route path="/" element={isAuthorized?<Profile/>:<Home/>}/>}
        

      </Routes>
    </Router>
   </div>
  );
}

export default App;
