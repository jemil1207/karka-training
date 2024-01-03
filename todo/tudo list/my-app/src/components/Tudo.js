import React, { useState } from 'react';

const Todo = () => {
  const [name, setName] = useState(""); 
  const [items, setItems] = useState([])

  let add = () => {
    setItems([...items, name]);
    console.log(items);
    setName(""); 
  };

  let del = (index) => {
    const item=items.filter((item)=>
    item.index !== items.index)
    setItems(item)

   
  };
  
          
  
  
  
  return (
    <div>
      <h1>Welcome to the todo list</h1>
      <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={add}>Add</button>

      
      <ol>
        {items.map((item, index) => (
          <li key={index}>{item} 
          <button onClick={()=>del(index)}>del</button>
          </li>

          
        ))}
        
      </ol>
    </div>
  );
}

export default Todo;







