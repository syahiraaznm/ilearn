import React from 'react';
import './dashboard.scss';
import Jobs from '../jobs/latestJobs';
import Insight from '../insight/insight';
import Join from '../join/join';

export default function Dashboard() {
    return ( 
        <div>
            <section> 
                <h1 className="dashboardTitle">Aqccusantium doloremque</h1>
                <h1 className="dashboardTitle">quae ab illo</h1>
                <div className="searchJob">
                    <input
                        placeholder="keyword"
                    />
                    <input
                        placeholder="location"
                    />
                    <div>Search Jobs</div>
                </div>
            </section>
            <section>
                <div>carousell</div>
            </section>
            <Jobs/>
            <Join/>
            <Insight/>
        </div>
    );
}