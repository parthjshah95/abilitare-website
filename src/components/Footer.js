import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import fblogo from '../images/fb-logo.png';
import linkedinlogo from '../images/linkedin-logo.png';
import ytlogo from '../images/yt-logo.png';
import instalogo from '../images/ig-logo.png';


function Footer() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className="footer">
            <div className="footer-top">
                <div className="footer-first">
                    <Link to="/" className="footer-logo" onClick={closeMobileMenu}>
                        Abilitare
                    </Link>
                </div>
                <div className="footer-second">
                    <div className="follow-us">
                        Follow Us
                    </div>
                    <a href="https://www.facebook.com/">
                        <img className="social-logo" src={fblogo} width='35' />
                    </a>
                    <a href="https://www.linkedin.com/company/abilitareinc/">
                        <img className="social-logo" src={linkedinlogo} width='35' />
                    </a>
                    {/* <a href="https://www.youtube.com/">
                        <img className="social-logo" src={ytlogo} width='75' />
                    </a> */}
                    <a href="https://www.instagram.com/">
                        <img className="social-logo" src={instalogo} width='35' />
                    </a>
                </div>
                <div className="footer-third">
                    <div className="footer-contact">
                        <div className="follow-us2">
                            Contact
                        </div>
                        <div className="mail-ids2">
                            <p><i class="fa fa-envelope" aria-hidden="true"></i> contact@abilitare.com</p>
                            <p><i class="fa fa-phone fa-rotate-90" aria-hidden="true"></i> +1 352-327-2284</p>
                        </div>
                    </div>
                    <br />
                    <div className="footer-address">
                        <div className="follow-us3">
                            Address
                        </div>
                        <div className="main-address">
                            <p>978 SW 2nd Ave,
                                Gainesville, Florida 32601, US</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="copyright">
                 Abilitare Inc. &copy; 2021
                </div>
            </div>
        </nav>
    )
}

export default Footer;