import React from 'react';
import './insight.scss';
import Title from "../../components/sectionTitle/title";

export default function Insight() {
    return (
        <section className="insightContainer">
            <Title title="Latest Insight" style={"color: black"}/>
            <div className="insightList">
                    <div className="listBox" id="pic1">
                        <div className="description">
                            <h3>Ut labore et dolore magna</h3>
                            <h6>
                                Lorem ipsum dolor sit
                                amet, consectetur adipisicing elit,
                                sed do elusmod tempor incididunt ut
                            </h6>
                        </div>
                    </div>
                    <div className="listBox" id="pic2">
                        <div className="description">
                            <h3>Ut labore et dolore magna</h3>
                            <h6>
                                Lorem ipsum dolor sit
                                amet, consectetur adipisicing elit,
                                sed do elusmod tempor incididunt ut
                            </h6>
                        </div>
                    </div>
                    <div className="listBox" id="pic3">
                        <div className="description">
                            <h3>Ut labore et dolore magna</h3>
                            <h6>
                                Lorem ipsum dolor sit
                                amet, consectetur adipisicing elit,
                                sed do elusmod tempor incididunt ut
                            </h6>
                        </div>
                    </div>
                    <div className="listBox" id="pic4">
                        <div className="description">
                            <h3>Ut labore et dolore magna</h3>
                            <h6>
                                Lorem ipsum dolor sit
                                amet, consectetur adipisicing elit,
                                sed do elusmod tempor incididunt ut
                            </h6>
                        </div>
                    </div>
            </div>
        </section>
    
    )
}