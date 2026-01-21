import React, { useState } from "react";
import { Link } from "react-router-dom";
// import image from "../img/ply.png";

function MyHeader() {
const[dropdownOpen ,setDropdownOpen]= useState(false)

const toggleDropdown = () => {
  setDropdownOpen(!dropdownOpen);
};






  return (
    <div>
      <header className="top-navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <div className="mt-20 headbg d-flex align-items-center">
              <img
                src="https://cdn.vectorstock.com/i/500p/33/06/coffee-cup-icon-vector-1083306.jpg"
                alt="BBCK Cafe Logo"
                className="musicImg"
              />

              <h1 className="ml-10">BBKC CHAICAFE</h1>

              <div
                className="collapse navbar-collapse navmenu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/menu">
                      Menu
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>

                  <div className="dropdown nav-item">
                    <button
                      className="btn dropdown-toggle nav-link"
                      type="button"
                      id="dropdownMenuButton"
                    
                      aria-haspopup="true"
                      aria-expanded={dropdownOpen ? "true" : "false"}
                      onClick={toggleDropdown}
                    >
                    Pages
                    </button>
                    <div
                      className={`dropdown-menu ${
                        dropdownOpen ? "show" : ""
                      }`}
                      aria-labelledby="dropdownMenuButton"
                    >
                      <Link className="dropdown-item" to="/reservation">
                        Reservation
                      </Link>
                      <Link className="dropdown-item" to="/gallery">
                        Gallery
                      </Link>
                    
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
export default MyHeader;
