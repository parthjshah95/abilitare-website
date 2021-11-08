import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import "../Assets/CSS/Footer.css";

function Footer() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="footer">
      <div className="footer-block">
        <div className="footer-first">
          <div className="logo">
            <Link to="/" className="footer-logo" onClick={closeMobileMenu}>
              Abilitare
            </Link>
          </div>
          {/* <div className="menu-list">
          <Link to="/" className="menu-item" onClick={closeMobileMenu}>
              Home
            </Link>
            <Link to="/downloads" className="menu-item" onClick={closeMobileMenu}>
              Downloads
            </Link>
            <Link to="/manual" className="menu-item" onClick={closeMobileMenu}>
              Manual
            </Link>
            <Link to="/about-us" className="menu-item" onClick={closeMobileMenu}>
              About Us
            </Link>
          </div> */}
        </div>
        <div className="footer-late">
          <div className="social-block">
            <a href="https://twitter.com/Abilitare">
              <i id="social-logos" class="fab fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com/AbilitareInc/">
              <i id="social-logos" class="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.linkedin.com/company/abilitareinc/">
              <i id="social-logos" class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/abilitare/">
              <i id="social-logos" class="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-second">
          <div className="contact-block">
            <div className="contact-heading">
              <h1>Contact Us</h1>
            </div>
            <div className="email">
              <i class="fa fa-envelope " aria-hidden="true"></i>{" "}
              info@abilitare.com
            </div>
            <div className="number">
              <i class="fa fa-phone fa-rotate-90" aria-hidden="true"></i> +1
              352-327-2284
            </div>
          </div>
        </div>
        <div className="footer-third">
          <div className="contact-block">
            <div className="contact-heading">
              <h1>Address</h1>
            </div>
            <div className="email">
              <i class="fas fa-map-marker " aria-hidden="true"></i> 978 SW 2nd
              Ave,
              <br /> Gainesville, <br />
              Florida 32601, US
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Footer;
