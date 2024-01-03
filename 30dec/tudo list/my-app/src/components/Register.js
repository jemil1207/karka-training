import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

      const[user,setUser]=useState({username:" ", password:" "})
      const navigate=useNavigate()
      // const[password,setPassword]=useState("")

    const handleclick=(e)=>{
      console.log(user)
      // console.log(password)
        e.preventDefault()




      //   const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

        
      //   const isUsernameTaken = existingUsers.some((existingUser) => existingUser.username === user.username);
    
      //   if (isUsernameTaken) {
      //     alert('Username already taken. Please choose another.');
      //   } else {
          
      //     const newUser = { username: user.username, password: user.password };
      //     const updatedUsers = [...existingUsers, newUser];
      //     localStorage.setItem('users', JSON.stringify(updatedUsers));
    
      //     alert('Registration successful. You can now login.');
      //     navigate('/');
      //   }
    
      //   // Clear the input fields
      //   setUser({ username: '', password: '' });
      // };
      




        
        localStorage.setItem('username', user.username);
        localStorage.setItem('password', user.password);


        const savedusername = localStorage.getItem('username');
        if (user.username === savedusername  ){
          alert("already registered in this username!")
        navigate('/')
           }
          else{
        alert('Registration successful. You can now login.');
         navigate('/')
          }
    
    
    setUser({ username: '', password: '' })
    
    

  return (
    <>
    <div className='regall'>
      <h1> Resgister</h1>
      <label>Ussername :</label>
      <input type='text'
        placeholder='enter your username'
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}/><br></br><br></br>
        
      <label>password :</label>
      <input type='password'
        placeholder='enter your password'
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}/><br></br><br></br>

        <button  onClick={handleclick}> Register </button>

        <Link to="/">Login</Link>

        
    </div>

    </>
  )
}

export default Register;
