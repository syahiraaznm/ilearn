import React, { Component } from 'react';
import { useHistory } from "react-router-dom";

export default function Dashboard() {
    let history = useHistory();
    return ( 
        <div style ={{height: "100vh", display:"flex", justifyContent: "center", margin: "auto", alignItems: "center"}}>
            Welcome to i-Learn Application!
            <span>created by alyssaznm</span>
            <button 
            onClick={()=> history.push("/login")}>
                Login
            </button>
            <button 
            onClick={()=> history.push("/register")}>
                Register
            </button>
        </div>
    );
}