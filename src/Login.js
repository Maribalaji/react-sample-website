import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
        const navigate=useNavigate()
        useEffect(()=>{
            if(localStorage.getItem('auth')) navigate('/dashboard')
        })
    function handleSubmit(e){
        e.preventDefault();
        if(e.target.elements.name.value==="test" && e.target.elements.psw.value==="12345678"){
            navigate('/dashboard');
            localStorage.setItem('auth',true)

        }
        else{
            alert('Please Enter Correct UserName and Password')
        }

    }
    return(
        <div className="form-login">
            <h2>LOGIN</h2>
            <form onSubmit={handleSubmit} className="login-cont">
                <input  className="logform" type="text" name="name" placeholder="Enter your UserName"/><br/>
                <input className="logform" type="password" name="psw" placeholder="Enter your Password"/><br />
                <button className="btn-log" type="submit">Login</button>

            </form>
        </div>
    )
}
export default Login