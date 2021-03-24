import React, { Component } from 'react';
import { useHistory } from "react-router-dom";

export default function Header() {
    let history = useHistory();
    return ( 
        <div style={{backgroundColor: "pink", display: "flex", justifyContent: "space-between"}}>
            <h4>Header</h4>
            <a href="#" onClick={()=> history.push("/")}>Home</a>
        </div>
        );
}