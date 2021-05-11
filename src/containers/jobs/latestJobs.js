import React from 'react';
import './latestJobs.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselWeb from "../../components/carousel/jobCarouselWeb";
import CarouselMobile from "../../components/carousel/jobCarouselMobile";
import Title from "../../components/sectionTitle/title";

export default function LatestJobs() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <section className="jobContainer">
            <Title title="Latest Jobs" style={"color: black"}/>
            <div className="jobList">
                <div className="whichCarouselWeb">
                    <CarouselWeb/>
                </div>
                <div className="whichCarouselMobile">
                    <CarouselMobile/>
                </div>
            </div>
        </section>
    
    )
}