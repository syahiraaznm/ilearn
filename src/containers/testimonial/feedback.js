import React from 'react';
import './feedback.scss';
import Receipient from '../../assets/image/feedback.svg';

export default function Feedback() {
    return (
        <section className="feedbackContainer">
            <div className="feedTitle">Testimonials</div>
            <div className="feedBox">
                <p style={{textAlign: "center"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                <div className="colReceipient">
                    <div className="mr-4"><img src={Receipient} alt="ReceipientFeedback"/></div>
                    <div className="receipient">
                        <div>Adrian Chapman</div>
                        <div>Head of Sales, Capita EB</div>
                    </div>
                </div>
            </div>
        </section>
    
    )
}