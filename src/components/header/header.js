import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './header.scss';
import Logo from '../../assets/image/logo.webp';
import nav from '../../assets/image/navBtn.svg';
export default function Header() {
    let history = useHistory();
    const [sideBarCollapse, setSideBarCollapse] = useState(false);
    const sideBar = () => {
        sideBarCollapse ? setSideBarCollapse(false) : setSideBarCollapse(true)
    }; 
    return ( 
        <div className="headerContainer">
            <div className="d-flex" style = {{width: "30%"}}>
                <div className="home" onClick={()=> history.push("/home")}>
                    {/* Volcanic */}
                    <img src={Logo} alt="volcanic logo" width="150px"/>
                </div>
            </div>
            <div className="tabs">
                <div className="d-flex title">
                    <div className="pageTitle" onClick={()=> history.push("/")}>Jobs</div>
                    <div className="pageTitle" onClick={()=> history.push("/")}>About</div>
                    <div className="pageTitle" onClick={()=> history.push("/")}>Candidates</div>
                    <div className="pageTitle" onClick={()=> history.push("/")}>Clients</div>
                    <div className="pageTitle" onClick={()=> history.push("/")}>Join Us</div>
                    <div className="pageTitle" onClick={()=> history.push("/")}>Insight</div>
                    <div className="pageTitle" onClick={()=> history.push("/")}>Contact Us</div>
                </div>
                <div className="d-flex auth">
                    <div className="authBtn" onClick={()=> history.push("/login")}>Login</div>
                    <div className="authBtn" onClick={()=> history.push("/register")}>Register</div>
                </div>
            </div>
            <div className="sideBarMobile" onClick={sideBar}>
                <img src={nav} alt="navigation bar" width="30px"/>
            </div>
            {sideBarCollapse === true && (
                    <div className="sideBarBox"> 
                    <div className="sideBarCollapsed" onClick={sideBar}>
                        <img src={nav} alt="navigation bar" width="30px"/> 
                    </div>
                    <div className= "sideHeader">
                        <span className="sideText">Jobs</span>
                        <span className="sideText">About</span>
                        <span className="sideText">Candidates</span>
                        <span className="sideText">Clients</span>
                        <span className="sideText">Join Us</span>
                        <span className="sideText">Insights</span>
                        <span className="sideText">Contact Us</span>
                    </div>
                </div>
            )}
        </div>
        );
}