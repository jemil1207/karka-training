import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
let Cart=(props)=>{

    return(
        <div><button className='cart'><FontAwesomeIcon icon={faCartShopping}/><b>{props.c}</b> </button></div>

    )
}
export default Cart;