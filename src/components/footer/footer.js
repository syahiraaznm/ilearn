import React, { Component } from 'react';
import './footer.scss';
import Instagram from '../../assets/image/footer/iconInsta.svg';
import Twitter from '../../assets/image/footer/iconTwitter.svg';
import Fb from '../../assets/image/footer/iconFb.svg';
import Email from '../../assets/image/footer/iconEmail.svg';
import Chat from '../../assets/image/footer/iconDialog.svg';
import Map from '../../assets/image/footer/iconMap.svg';
class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="footerContainer">
                <div className="footerBox">
                    <div className="social">
                        <div>Get Social</div>
                        <div className="socialPlatform">
                            <div className="icon"><img src={Instagram} alt="Instagram"/></div>
                            <div className="icon"><img src={Twitter} alt="Twitter"/></div>
                            <div className="icon"><img src={Fb} alt="Facebook"/></div>
                        </div>
                    </div>
                    <div className="Col1">
                        <div><img src={Email} alt="email"/></div>
                        <div>Email us</div>
                        <div>info@volcanic.com</div>
                    </div>
                    <div className="Col2">
                        <div><img src={Chat} alt="chat" width="25px"/></div>
                        <div>Get in touch</div>
                        <div>UK: 0161 217 1517</div>
                    </div>
                    <div className="Col3">
                        <div><img src={Map} alt="map"/></div>
                        <div>Find us</div>
                        <div className="Col3-address">
                            <span>Dale House Floor B, Tiviot Dale</span>
                            <span>Stokport SK1 1TB</span> 
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Footer;