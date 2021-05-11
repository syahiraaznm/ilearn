import React from 'react';
import './insight.scss';
import Pic1 from '../../assets/image/insight/pic5.jpg';
import Pic2 from '../../assets/image/insight/pic1.jpg';
import Pic3 from '../../assets/image/insight/pic3.jpg';
import Pic4 from '../../assets/image/insight/pic4.jpg';

export default function Insight() {
    return (
        <section className="insightContainer">
            <div className="insightTitle">Latest Insight</div>
            <div className="insightList">
                    <div className="listBox" id="pic1">
                        {/* <img src={Pic1} alt="insight" width="200px"/> */}
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
                        {/* <img src={Pic2} alt="insight" width="200px"/> */}
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
                        {/* <img src={Pic3} alt="insight" width="200px"/> */}
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
                        {/* <img src={Pic4} alt="insight" width="200px"/> */}
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