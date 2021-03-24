import React, { Component } from 'react';
import { useHistory } from "react-router-dom";

export default function Dashboard() {
    let history = useHistory();
    return ( 
        <div style ={{height: "100vh", display:"flex", flexDirection: "column", justifyContent: "center", margin: "auto", alignItems: "center"}}>
            <div style= {{border: "1px solid pink", alignItems: "center", display:"flex", flexDirection: "column"}}>
                <span>Welcome to i-Learn Application!</span>
                <span>created by alyssaznm</span>
                <div>
                    <button 
                    onClick={()=> history.push("/login")}>
                        Login
                    </button>
                    <button 
                    onClick={()=> history.push("/register")}>
                        Register
                    </button>
                </div>
            </div>
        </div>
    );
}