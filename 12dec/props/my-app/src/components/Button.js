import React from 'react'
let Button=(props)=>{
    let count=props.mycount
    let add=()=>{
        count=count+1
        console.log(count)
    }

    let sub=()=>{
        count=count-1
        console.log(count)
    }
    return(
      <>
        <button onClick={add}>+</button>
        <button onClick={sub}>-</button>

        </>
    )
}
export default Button;