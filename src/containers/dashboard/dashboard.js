import React from 'react';
// import { useHistory } from "react-router-dom";
import './dashboard.scss';
import Jobs from '../jobs/latestJobs';
import Insight from '../insight/insight';

export default function Dashboard() {
    // let history = useHistory();
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
            <Insight/>
        </div>
    );
}