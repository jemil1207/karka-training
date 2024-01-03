
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react'

const Login = () => {

    const[user,setUser]=useState({username:" ", password:" "})
    const navigate = useNavigate()
    const sub=(e)=>{
        // console.log(user)
        e.preventDefault()

        const savedusername=localStorage.getItem('username');
        const savedpassword=localStorage.getItem('password');

        if (user.username === savedusername  &&  user.password === savedpassword){

            alert("login sucessful!")
            navigate('/Tudo')
        }
        else
          alert("invalid username or password. Please try again. ")
        setUser({ username: '', password: '' })
    }

  return (
   <>
     <h1> Login </h1>
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

        <button onClick={sub}> submit </button>

        <Link to="/register">Register</Link>
   
   </>
  )
}

export default Login

