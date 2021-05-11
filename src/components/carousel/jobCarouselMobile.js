import React from 'react';
import './carousel.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function JobCarouselMobile() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return ( 
        // <div style={{
        //     // padding: " 1rem 8rem 0", 
        //     width: "-webkit-fill-available", 
        //     marginTop: "1rem"
        // }}> 
                    <Slider {...settings} className="slider">
                        <div className="jobBox">
                            <div className="jobCol">
                                <div className="header1">Duis aute irure dolor in reprehenderit</div>
                                <div>$20000 - $30000 | LONDON </div>
                                <p style={{fontWeight: "100"}}>
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamoo laboris nisi ut aliquip ex
                                    ea commodo consequat
                                </p>
                            </div>
                            <div className="btnApply">
                                <div className="btnText">APPLY</div>
                            </div>
                        </div>
                        <div className="jobBox">
                            <div className="jobCol">
                                <div className="header1">Duis aute irure dolor in reprehenderit</div>
                                <div>$20000 - $30000 | LONDON </div>
                                <p style={{fontWeight: "100"}}>
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamoo laboris nisi ut aliquip ex
                                    ea commodo consequat
                                </p>
                            </div>
                            <div className="btnApply">
                                <div className="btnText">APPLY</div>
                            </div>
                        </div>
                        <div className="jobBox">
                            <div className="jobCol">
                                <div className="header1">Duis aute irure dolor in reprehenderit</div>
                                <div>$20000 - $30000 | LONDON </div>
                                <p style={{fontWeight: "100"}}>
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamoo laboris nisi ut aliquip ex
                                    ea commodo consequat
                                </p>
                            </div>
                            <div className="btnApply">
                                <div className="btnText">APPLY</div>
                            </div>
                        </div>
                        <div className="jobBox">
                            <div className="jobCol">
                                <div className="header1">Duis aute irure dolor in reprehenderit</div>
                                <div>$20000 - $30000 | LONDON </div>
                                <p style={{fontWeight: "100"}}>
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamoo laboris nisi ut aliquip ex
                                    ea commodo consequat
                                </p>
                            </div>
                            <div className="btnApply">
                                <div className="btnText">APPLY</div>
                            </div>
                        </div>
                        <div className="jobBox">
                            <div className="jobCol">
                                <div className="header1">Duis aute irure dolor in reprehenderit</div>
                                <div>$20000 - $30000 | LONDON </div>
                                <p style={{fontWeight: "100"}}>
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamoo laboris nisi ut aliquip ex
                                    ea commodo consequat
                                </p>
                            </div>
                            <div className="btnApply">
                                <div className="btnText">APPLY</div>
                            </div>
                        </div>
                    </Slider>
    //   </div>

    );
}