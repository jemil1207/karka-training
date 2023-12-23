import React from 'react';
import {Link} from 'react-router-dom'

let Home=()=>{

    return(
        <>
            <div className='all'> 
                    <div className='login'> <b>Login</b></div><br></br>
                            <form>
                                <label >NAME :</label>
                                <input type='text' placeholder='name' /><br></br><br></br>
                                <label>PASSWORD :</label>
                                < input type='password'  placeholder='pasword' /><br></br><br></br>
                                <button> submit </button><Link to= "/reg"><button style={{marginLeft:"10px"}}> Register</button></Link>
                             </form>
             </div>
        </>
    )
}
export default Home;