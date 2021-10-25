import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Assets/CSS/Footer.css';
import enabled from '../../../images/for-the-en-abled.jpg';

function Footer() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className="footer">
            <div className="footer-top">
                <div className="footer-first">
                    {/* <Link to="/" className="footer-logo" onClick={closeMobileMenu}>
                        Abilitare
                    </Link> */}
                    <Link to="/" className="footer-logo" onClick={closeMobileMenu}>
                        <img src={enabled} width="200"/>
                    </Link>
                </div>
                <div className="footer-second">
                    <a href="https://twitter.com/Abilitare">
                        <i id="social-logos" class="fab fa-twitter fa-lg"></i>
                    </a>
                    <a href="https://www.facebook.com/AbilitareInc/">
                        <i id="social-logos" class="fab fa-facebook-f fa-lg"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/abilitareinc/">
                        <i id="social-logos" class="fab fa-linkedin-in fa-lg"></i>
                    </a>
                    <a href="https://www.youtube.com/watch?v=fPDMhJKK-QY">
                        <i id="social-logos" class="fab fa-youtube fa-lg"></i>
                    </a>
                    <a href="https://www.instagram.com/abilitare/">
                        <i id="social-logos" class="fab fa-instagram fa-lg"></i>
                    </a>
                </div>
                <div className="footer-third">

                <div className="footer-address">
                        <div className="follow-us">
                            Address
                        </div>
                        <div className="main-address">
                            <p>978 SW 2nd Ave,
                                Gainesville, Florida 32601, US</p>
                        </div>
                    </div>
                    <div className="footer-contact">
                        <div className="follow-us">
                            Contact Us
                        </div>
                        <div className="mail-ids2">
                            <p><i class="fa fa-envelope" aria-hidden="true"></i> info@abilitare.com</p>
                            <p><i class="fa fa-phone fa-rotate-90" aria-hidden="true"></i> +1 352-327-2284</p>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            <div className="footer-bottom">
                <div className="copyright">
                    Abilitare Inc &copy; 2021
                </div>
            </div>
        </nav>
    )
}

export default Footer;