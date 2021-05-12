import React from 'react';
import './dashboard.scss';
import Jobs from '../jobs/latestJobs';
import Insight from '../insight/insight';
import Join from '../join/join';
import Testimonial from '../testimonial/feedback';
import About from '../aboutUs/aboutUs';

export default function Dashboard() {
    return ( 
        <div>
            <Jobs/>
            <About/>
            <Testimonial/>
            <Join/>
            <Insight/>
        </div>
    );
}