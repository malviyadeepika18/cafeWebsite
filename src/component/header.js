import React,{useState} from "react";
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
                class="musicImg"
              />

              <h1 className="ml-10">BBKC CHAICAFE</h1>

              <div
                className="collapse navbar-collapse navmenu"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item ">
                    <a className="nav-link" href="/">
                      Home
                    </a>
                  </li>
                  <li className="nav-item ">
                    <a className="nav-link" href="/menu">
                      Menu
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/about">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/contact">
                      Contact
                    </a>
                  </li>

                  <div class="dropdown  nav-item">
                    <button
                      class="btn  dropdown-toggle nav-link"
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
                      <a class="dropdown-item" href="/reservation">
                      Reservation
                      </a>
                      <a class="dropdown-item" href="/gallery">
                      Gallery
                      </a>
                    
                    </div>
                  </div>
                </ul>
              </div>
            </div>{" "}
          </div>
        </nav>
      </header>
    </div>
  );
}
export default MyHeader;
