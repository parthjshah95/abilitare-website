import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';


function Footer() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <nav className="footer">
            <div className="footer-container">
                <Link to="/" className="footer-logo" onClick={closeMobileMenu}>
                    Abilitare 
                    {/* <i className='fab fa-typo3' /> */}
                </Link>
            </div>
        </nav>
    )
}

export default Footer;