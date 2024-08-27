import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Link, Routes, Navigate } from "react-router-dom";

//import local components
import topbanner from "./Assets/topBanner.png";
import Homepage from "./homepage";
import Listings from "./listings";
import ParentContact from "./contactParent";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const bodyStyle = {
    padding: "none",
    margin: "none",
    width: "100%",
  };

  const navBarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#193621",
    padding: "1% 0",
    width: "100%",
    position: "relative",
    zIndex: 1,
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
    padding: "10px",
  };

  const logoStyle = {
    width: "20%",
  };

  const menuStyle = {
    display: isMenuOpen ? "block" : "none",
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    backgroundColor: "#21482C",
    textAlign: "center",
  };

  const hamburgerStyle = {
    display: isMobileView ? "block" : "none",
    fontSize: "30px",
    color: "white",
    cursor: "pointer",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const navLinksContainerStyle = {
    display: isMobileView ? "none" : "flex",
    justifyContent: "space-around",
    width: "100%",
  };

  const navLinksMobileStyle = {
    display: "flex",
    flexDirection: "column",
  };

  return (
    <Router>
      <div style={bodyStyle}>
        <div
          style={{
            backgroundColor: "#21482C",
            textAlign: "center",
          }}
        >
          <img
            src={topbanner}
            alt="Logo"
            style={logoStyle}
            className="topbanner"
          />
        </div>
        <div style={navBarStyle} className="navbarStyle">
          <div
            style={hamburgerStyle}
            onClick={toggleMenu}
            className="hamburger"
          >
            &#9776;
          </div>
          <div style={navLinksContainerStyle}>
            <Link to="/" style={linkStyle} className="navlinks">
              Home
            </Link>
            <a
              href="https://chatgpt.com/g/g-j7MmZHlFf-arden-artistry"
              style={linkStyle}
              className="navlinks"
            >
              Chat with our AI bot
            </a>
            <Link to="/listings" style={linkStyle} className="navlinks">
              Product and Services
            </Link>
            <Link to="/contact" style={linkStyle} className="navlinks">
              Contact
            </Link>
          </div>
          {isMenuOpen && (
            <div style={{ ...menuStyle, ...navLinksMobileStyle }}>
              <Link
                to="/"
                style={linkStyle}
                className="navlinks"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <a
                href="https://chatgpt.com/g/g-j7MmZHlFf-arden-artistry"
                style={linkStyle}
                className="navlinks"
                onClick={toggleMenu}
              >
                Chat with our AI bot
              </a>
              <Link
                to="/listings"
                style={linkStyle}
                className="navlinks"
                onClick={toggleMenu}
              >
                Our Helpers
              </Link>
              <Link
                to="/contact"
                style={linkStyle}
                className="navlinks"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </div>
          )}
        </div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/contact" element={<ParentContact />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default NavBar;