
  import React, { useState } from 'react';
import jsonData from '../components/data.json';
import Cart from './cart';
import { BrowserRouter as Router, Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
const About = (props) => {
  let [count, setCount] = useState(0);
  let [clickedItem, setClickedItem] = useState(null);

  function font(item) {
    setCount(count + 1);
    setClickedItem(item);
  }

  const data = jsonData;
  let filteredData = props.prp == null ? data.data : data.data.filter((item) => item.size === props.prp);

  return (
    <>
      <div>
        {filteredData.map((item, index) => (
          <div className='all' key={index}>
            <p>
              <img src={item.image} height='200px' alt={item.name} />
            </p>
            <p>{item.name}</p>
            <p>{item.size}</p>
            <p>{item.prize}</p>
            <p>
              <button onClick={() => font(item)}>  {item.b}                      
              </button>
            </p>
            
          </div>
        
        ))}
        {/* <Link to='/cart'><button className='cart'><FontAwesomeIcon icon={faCartShopping}/> </button></Link> */}
        {/* <Link to ="/Cart"><Cart c={count}/></Link>  */}
        
      </div>
     
     
      {clickedItem && (
  <div> 
    
    <p>Name: {clickedItem.name}</p>
    <p>Size: {clickedItem.size}</p>
    <p>Prize: {clickedItem.prize}</p>
    <p> <img src={clickedItem.image} height='200px'  /></p>
    
  </div>
  
)} 
    </>
  );
};

export default About;





