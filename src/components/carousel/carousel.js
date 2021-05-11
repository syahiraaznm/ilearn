import React from 'react';
import './carousel.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
    return ( 
        <div style={{padding: " 1rem 8rem 0", backgroundColor: "rgba(53,60,60, 0.42)", marginTop: "1rem"}}> 
            <Slider {...settings}>
                <div className="carouselBox">
                    {/* <span>O</span> */}
                </div>
                <div className="carouselBox">
                    {/* <span>O</span> */}
                </div>
                <div className="carouselBox">
                    {/* <span>O</span> */}
                </div>
                <div className="carouselBox">
                    {/* <span>O</span> */}
                </div>
                <div className="carouselBox">
                    {/* <span>O</span> */}
                </div>
                <div className="carouselBox">
                    {/* <span>O</span> */}
                </div>
            </Slider>
      </div>

    );
}