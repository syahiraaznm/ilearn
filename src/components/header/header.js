import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './header.scss';
import Logo from '../../assets/image/logo.webp';
import nav from '../../assets/image/navBtn.svg';
import Button from '../button/button';
import Carousel from '../carousel/carousel';

export default function Header() {
    let history = useHistory();
    const [sideBarCollapse, setSideBarCollapse] = useState(false);
    const sideBar = () => {
        sideBarCollapse ? setSideBarCollapse(false) : setSideBarCollapse(true)
    }; 
    const closeSideBar = () => {
        if (sideBarCollapse === true) {
            setSideBarCollapse(false)
        }
    };
    return ( 
        <div className="headerContainer">
            <div className="headerBox">
                <div className="d-flex" style = {{width: "30%"}}>
                    <div className="home" onClick={()=> history.push("/")}>
                        V O L C A N I C
                        {/* <img src={Logo} alt="volcanic logo" width="150px"/> */}
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
                    <Button 
                    btnBox="boxAuth" 
                    btnClass="authBtn" 
                    btnName="Login"
                    onClick={()=> history.push("/login")}
                    btnClass2="authBtn"
                    btnName2="Register"
                    onClick2={()=> history.push("/register")}
                    />
                    {/* <div className="d-flex auth">
                        <div className="authBtn" onClick={()=> history.push("/login")}>Login</div>
                        <div className="authBtn" onClick={()=> history.push("/register")}>Register</div>
                    </div> */}
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
                            <span className="sideText" onClick={()=> {
                                closeSideBar();
                                history.push("/");
                            }}>Jobs</span>
                            <span className="sideText" onClick={()=> {
                                closeSideBar();
                                history.push("/");
                            }}>About</span>
                            <span className="sideText" onClick={()=> {
                                closeSideBar();
                                history.push("/");
                            }}>Candidates</span>
                            <span className="sideText" onClick={()=> {
                                closeSideBar();
                                history.push("/");
                            }}>Clients</span>
                            <span className="sideText" onClick={()=> {
                                closeSideBar();
                                history.push("/");
                            }}>Join Us</span>
                            <span className="sideText" onClick={()=> {
                                closeSideBar();
                                history.push("/");
                            }}>Insights</span>
                            <span className="sideText" onClick={()=> {
                                closeSideBar();
                                history.push("/");
                            }}>Contact Us</span>
                            <span className="sideText" onClick={()=> {
                                closeSideBar();
                                history.push("/login");
                            }}>
                                Login
                            </span>
                            <span className="sideText" onClick={()=> {
                                closeSideBar();
                                history.push("/register");
                            }}>Register</span>
                        </div>
                    </div>
                )}
            </div>
            <section> 
                <h1 className="dashboardTitle">Aqccusantium doloremque</h1>
                <h1 className="dashboardTitle">quae ab illo</h1>
                <div className="searchJob">
                    <input
                        className="iptText"
                        placeholder="keyword"
                    />
                    <input
                        className="iptText"
                        placeholder="location"
                    />
                    <div className="btnSearch">Search Jobs</div>
                </div>
                <section>
                    <Carousel/>
                </section>
            </section>
        </div>
        );
}