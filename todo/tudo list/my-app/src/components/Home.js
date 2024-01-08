

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Home.css'
import { FaUserCircle } from "react-icons/fa";

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

  const [edit, setEdit]=useState(null)
 const handleEdit=(index)=>{
  const Edit=[...tasks]
  Edit[index]=task
  setEdit(null)
  setTask('')
  setTasks(Edit)
 }

  return (
    <>
      <div>
        <button onClick={handleLogout}>Logout</button>
        <header className="header
        ">Welcome, {userName} Create Your tasks
         < FaUserCircle className="image" /></header>
        <div className="all">
        <input className="input" type="text" value={task} onChange={(e) => setTask(e.target.value)} />
        <button className='addbutton'onClick={handleAdd}>Add</button>
        <div className="listall">
        <table className="table">
          
          {tasks.map((a, index) => (
            <tr key={index} >
              {edit===index?(
              <>
              <td>{index+1}</td>
               <td> <input  type="text" value={task} onChange={(e)=>setTask(e.target.value)}/></td>
               <td> <button onClick={()=>handleEdit(index)}>Save</button> 
                </td>
              </>
              ):(
                <>
                <td className="index">{index+1}</td>
             <td className="content"> {a} </td>
             <td><button className="del" onClick={() => handleDelete(index)}>Delete</button></td>
             <td> <button className="edit" onClick={() => setEdit(index)}>Edit</button></td>
              </>
              )}
            </tr>
          ))}
        
        </table>
        </div>
        </div>
        <button > resetpassword</button>
        </div>

      
    </>
  );
};

