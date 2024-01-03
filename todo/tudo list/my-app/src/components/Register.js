import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

 const Register = () => {
  const navigate = useNavigate();

  const handleRegisterClick = (e) => {
    e.preventDefault();

    const existingUserData = JSON.parse(localStorage.getItem('userData')) || [];
    const userExists = existingUserData.some(user => user.username === use);

    if (userExists) {
      alert("Username already exists");
    } else {

      const newUser = { username: use, password: pass };
      const updatedUserData = [...existingUserData, newUser];

     
      localStorage.setItem('userData', JSON.stringify(updatedUserData));

      alert("Registration successful");
      navigate("/");
    }
  };

  const [use, setUse] = useState("");
  const [pass, setPass] = useState("");

  return (
    <>
      <h3>Register</h3>

      <form onSubmit={handleRegisterClick}>
        
        
        <label htmlFor="">User_name</label>
        <input type="text" value={use} onChange={(e) => setUse(e.target.value)} required /><br />
        <label htmlFor="">Password</label>
        <input type="password" required value={pass} onChange={(e) => setPass(e.target.value)} /><br />
        <button type="submit">Register</button>
      </form>

      <Link to= '/'>login</Link>
    </>
  );
};
export default Register;











      