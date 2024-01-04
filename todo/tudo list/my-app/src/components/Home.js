

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const userName = localStorage.getItem('Username');
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
  };
  const list = JSON.parse(localStorage.getItem(userName)) || [];

  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState(list);
  const [pass,setPass]=useState('')
  useEffect(() => {
    const string= JSON.stringify(tasks);
    localStorage.setItem(userName, string);
  }, [tasks]);

  const handleAdd = () => {
    setTask('');
    setTasks([...tasks, task]);
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };


  let rp=()=>{
    
  }

  return (
    <>
      <div>
        <button onClick={handleLogout}>Logout</button>
        <h1>Welcome, {userName} Create Your tasks</h1>
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
        <button onClick={handleAdd}>Add</button>
        <ol>
          {tasks.map((a, index) => (
            <li key={index}>
              {a} 
              <button onClick={() => handleDelete(index)}>Delete</button>
              <button onClick={() => handleEdit(in)}>Delete</button>
            </li>
            
          ))}
        </ol>
        <button onClick={rp}> resetpassword</button>

      </div>
    </>
  );
};

