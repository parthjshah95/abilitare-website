import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { Button } from './Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    // const showButton = () => {
    //     if(window.innerWidth <= 960){
    //         setButton(false);
    //     } else {
    //         setButton(true);
    //     }
    // };

    // useEffect(() => {
    //     showButton();
    // }, []);

    // window.addEventListener('resize', showButton);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    Abilitare
                    <span className="note">(previously <span className="brainforce-logo">BrainForce</span>)</span>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <div class="dropdown">
                            <button class="dropbtn">Products
                                <i class="fa fa-caret-down"></i>
                            </button>
                            <div class="dropdown-content">
                                <a href="#">Abili Mouse</a>
                                <a href="#">Abili Toolbar</a>
                            </div>
                        </div>
                    </li>
                    <li className='nav-item'>
                        <Link to='/manual' className='nav-links' onClick={closeMobileMenu}>
                            Manual
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                            About Us
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar