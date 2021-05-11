import React from 'react';
import './aboutUs.scss';
import Title from "../../components/sectionTitle/title";
import Button from "../../components/button/button";

export default function AboutUs() {
    return (
        <section >
            <div className="aboutContainer">
                <Title title="About Us" style={"color: #FFFFFFF"}/>
                <div className="aboutBox">
                    <p style={{textAlign: "center"}}>
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor 
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla perlatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia. 
                    </p>
                    <div className="aboutCount">
                        <div className="countBox">
                            <div>2,000 +</div>
                            <div>
                                Lorem ipsum dolor sit
                                amet, consectetur adipisicing elit,
                                sed do elusmod tempor
                            </div>
                        </div>
                        <div className="countBox">
                            <div>90,000 +</div>
                            <div>
                                Lorem ipsum dolor sit
                                amet, consectetur adipisicing elit,
                                sed do elusmod tempor
                            </div>
                        </div>
                        <div className="countBox">
                            <div>35</div>
                            <div>
                                Lorem ipsum dolor sit
                                amet, consectetur adipisicing elit,
                                sed do elusmod tempor
                            </div>
                        </div>
                    </div>
                    <Button btnBox="boxCenter" btnName="read more" btnClass="btnMore" btnClass2="extraBtn"/>
                </div>

            </div>
        </section>
    
    )
}