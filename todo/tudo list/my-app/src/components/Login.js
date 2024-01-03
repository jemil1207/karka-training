import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
 const Login = () => {
  const navigate = useNavigate();
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUserData = JSON.parse(localStorage.getItem('userData')) || [];
    const user = storedUserData.find(user => user.username === enteredUsername);

    if (user && user.password === enteredPassword) {
      alert("Login successful");
      navigate("/tudo");
    } else if (user && user.password !== enteredPassword) {
      alert("Invalid password");
    } else if (!user) {
      alert("Invalid username");
    }
  }    

  return (
    <>
    <div className='loginall'>
      
      
            <h1 className='log'>Login</h1>
                <label htmlFor="enteredUsername"  className='username'>Username :</label>
              <input
          className='luser'
          type="text"
          
          value={enteredUsername}
          onChange={(e) => setEnteredUsername(e.target.value)}
          required
        /><br /><br></br>
        <label htmlFor="enteredPassword" className='password'>Password :</label>
        <input
          className='lpass'
          type="password"
          
          value={enteredPassword}
          onChange={(e) => setEnteredPassword(e.target.value)}
          required
        /><br />
        <button type="submit" className='subbutton' onClick={handleLogin}>Login</button><br />
      

      
      <Link to="/register"className='loglink'> Create an Account</Link>
      </div>
    </>
  );
};
export default Login;
