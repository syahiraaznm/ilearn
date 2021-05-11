import React from 'react';
import './join.scss';
import Title from "../../components/sectionTitle/title";
import Button from "../../components/button/button";

export default function Join() {
    return (
        <section className="joinContainer">
            <div className="joinBox">
                <div className="joinCol">
                    <Title title="Work for us!" style={"color: #FFFFFF"}/>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    </p>
                    <Button btnBox="boxCenter" btnName="learn more" btnClass="btnMore" btnClass2="extraBtn"/>
                </div>
                <div className="workPic"></div>
            </div>
        </section>
    
    )
}