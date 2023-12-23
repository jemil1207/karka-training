import React from 'react'
import { useState } from 'react'

const Reg = () => {

  const [name,setName]=useState("")
  const [pass,setPass]=useState("")
  const submit=(e)=>{
    // e.preventDefault()
    console.log("name",name)
    console.log("Pass",pass)
    // setName(" ")
  }
  
  return (
    <div className='all'>
      <div className='login'> <b>REGISTER</b></div><br></br>
                            <form>
                                <label >NAME :</label>
                                <input type='text' placeholder='name'  onChange={(e)=>setName(e.target.value)}/><br></br><br></br>
                                <label>CREATE PASSWORD :</label>
                                < input type='password'  placeholder='pasword'onChange={(e)=>setPass(e.target.value)} /><br></br><br></br>
                                <label>CONFRIM PASSWORD :</label>
                                < input type='password'  placeholder='pasword' /><br></br><br></br>
                                <button onClick={submit}> submit </button>
                             </form>
             </div>
      
    
  )
}

export default Reg;

