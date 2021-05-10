import React, { Component } from 'react';
import './footer.scss';
class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="footerContainer">
                <div className="d-flex">
                    <div>
                        <span>Get Social</span>
                        <div>
                            <img/>
                            <img/>
                            <img/>
                        </div>
                    </div>
                    <div>
                        Email us
                    </div>
                    <div>
                        Get in touch
                    </div>
                    <div>
                        Find us
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Footer;