import "./Home.scss";
import { RxCross1 } from "react-icons/rx";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiDownArrow } from "react-icons/bi";
const Home = () => {
  const [showNav, setShowNav] = useState(false);
  const showHiddenNavbar = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="Home-container">
      <div className="home-navbar-container">
        {/* <div className="navbar-title-image-container"> */}
        <img
          src="https://trydo.rainbowit.net/assets/images/logo/logo.png"
          alt="/"
          className="navbar-image"
        />
        {/* </div> */}
        <RxHamburgerMenu
          className="hamburger-icon"
          onClick={() => {
            showHiddenNavbar();
          }}
        />
        <div className="main-navbar-menu-container">
          <a href="#Home" className="each-main-navbar-menu">
            Home
          </a>
          <a href="#Service" className="each-main-navbar-menu">
            Service
          </a>
          <a href="#About" className="each-main-navbar-menu">
            About
          </a>
          <a href="#Contact" className="each-main-navbar-menu">
            Contact
          </a>
          <a href="#Pages" className="each-main-navbar-menu">
            Pages
          </a>
          <button className="navbar-button">
            BUY NOW
          </button>
        </div>
        {showNav ? (
          <div
            className="hidden-navbar-container"
            onClick={() => {
              showHiddenNavbar();
            }}
          >
            <RxCross1 className="cross-icon" />
            <div className="hidden-navbar-menu-container">
              <p className="hidden-navbar-each-menu">
                Home
                <BiDownArrow />
              </p>
              <p className="hidden-navbar-each-menu">Service</p>
              <p className="hidden-navbar-each-menu">
                About
                <BiDownArrow />
              </p>
              <p className="hidden-navbar-each-menu">Pages</p>
              <p className="hidden-navbar-each-menu">Blocks</p>
              <p className="hidden-navbar-each-menu">
                Contact
                <BiDownArrow />
              </p>
            </div>
          </div>
        ) : null}
      </div>
      <div className="home-title-container" id='Home'>
        <div className="home-title-container">
          <p className="home-title">WE ARE AGENCY</p>
          <h1 className="home-sub-title">
            TECHNOLOGY & INNOVATION FOR AGENCY SERVICES.
          </h1>
          <button className="home-button">CONTACT US</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
