import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Ensure you have a CSS file for styles

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav id="topnav" className="defaultscroll is-sticky">
      <div className="container relative">
        <div className="menu-extras">
          <div className="menu-item">
            <a
              className={`navbar-toggle ${menuOpen ? "open" : ""}`}
              id="isToggle"
              onClick={toggleMenu}
            >
              <div className="lines">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </a>
            {/* Company Logo Text */}
            <span className="company-logo-text">Company Logo</span>
          </div>
        </div>
        <div id="navigation" style={{ display: menuOpen ? "block" : "none" }}>
          {/* Navigation Menu */}
          <ul className="navigation-menu nav-light">
            <a className="logo" href="index.html">
              <span className="inline-block dark:hidden">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/logo-dark.png`}
                  className="l-dark"
                  height="24"
                  alt=""
                />
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/logo-light.png`}
                  className="l-light"
                  height="24"
                  alt=""
                />
              </span>
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/logo-light.png`}
                height="24"
                className="hidden dark:inline-block"
                alt=""
              />
            </a>
            <li>
              <Link to={"/home"}>Home</Link>
            </li>
            <li>
              <Link to={"/services"}>Services</Link>
            </li>
            <li>
              <Link to={"/aboutus"}>About</Link>
            </li>
            <li>
              <a
                href="#industries"
                className="sub-menu-item"
                onClick={closeMenu}
              >
                Industries
              </a>
            </li>
            <li>
              <a href="#faq" className="sub-menu-item" onClick={closeMenu}>
                FAQ
              </a>
            </li>
            <li>
              <a
                href="/contactus"
                className="sub-menu-item"
                onClick={closeMenu}
              >
                Contact Us
              </a>
            </li>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
          </ul>
          {/* End navigation menu */}
        </div>
        {/* End navigation */}
      </div>
      {/* End container */}
    </nav>
  );
};
