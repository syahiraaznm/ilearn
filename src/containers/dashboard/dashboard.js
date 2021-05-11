import React from 'react';
import './dashboard.scss';
import Jobs from '../jobs/latestJobs';
import Insight from '../insight/insight';
import Join from '../join/join';
import Testimonial from '../testimonial/feedback';
import About from '../aboutUs/aboutUs';
import Carousel from '../../components/carousel/carousel';

export default function Dashboard() {
    return ( 
        <div>
            {/* <section className="dashboardContainer"> 
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
            </section> */}
            <Jobs/>
            <About/>
            <Testimonial/>
            <Join/>
            <Insight/>
        </div>
    );
}