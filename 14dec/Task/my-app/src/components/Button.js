import { useState } from'react'
import React from 'react';
import About from './About.js'




let Button=()=>{
let [setdata,setvalue]=useState(null)

let b1=()=> {

  setvalue("L")
}
let b2=()=>{
  setvalue("XL")
}

let b3=()=>{

  
      setvalue("XXL")
}


    return(


<><div>
             <div className='button'>
              <p> SIZES</p><br></br>
             
                <p><button onClick={b1}>L</button></p>
                <p><button onClick={b2} >XL</button></p>
               <p><button onClick={b3} >XXL</button></p> 
               
               
        </div> 
        
        </div>
        <About prp={setdata}/>
        
           
        </>  
        

    )
    }
    export default Button;

