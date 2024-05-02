import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Dashboard(){
    const navigate=useNavigate();
    const[logout,setLogout]=useState(false);

    useEffect(()=>{
        if(!localStorage.getItem('auth')) navigate('/login')
    },[logout])

    const handleLogout=(e)=>{
        e.preventDefault();
        localStorage.removeItem('auth');
        setLogout(true)
    }
    return(
        <div className="dash">
        <h2>Welcome to Home page</h2>
        <button className="dash-btn" onClick={handleLogout}>LogOut</button>
        </div>
    )
}
export default Dashboard