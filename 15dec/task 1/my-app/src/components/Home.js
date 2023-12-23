import React, { useState } from 'react'


let Home=()=>{

  const [name,setName]=useState("")
  const [pass,setPass]=useState("")

  // const all=(e)=>{setName,setPass({...name,...pass})}

const handleSubmit=(e)=>{
  e.preventDefault()
  console.log("name",name)
  console.log("pass",pass)
  setName("")
  setPass("")
}
  return( 

    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='name' value={name}  onChange={(e)=>setName(e.target.value)}/>
      <input type='password'  placeholder='pasword' value={pass} onChange={(e)=>setPass(e.target.value)}/>
      <button> submit </button>
    </form>
  )
}

export default Home;