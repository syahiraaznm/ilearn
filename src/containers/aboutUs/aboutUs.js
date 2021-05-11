import React from 'react';
import './aboutUs.scss';
import Receipient from '../../assets/image/feedback.svg';

export default function AboutUs() {
    return (
        <section >
            <div className="aboutContainer">
                <div className="aboutTitle">About Us</div>
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
                    <div className="d-flex justify-content-center">
                        <div className="btnMore">read more</div>
                    </div>
                </div>

            </div>
        </section>
    
    )
}