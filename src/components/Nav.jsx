import React from "react";
import "../styling/Nav.css";
import { FaSearch } from "react-icons/fa";

function Nav() {
  return (
    <header className="nav-wrapper">
      <div className="container">
        <nav className="navbar navbar-expand-lg sticky-top">
          {/* Brand */}
          <a className="brandname navbar-brand" href="/">
            firstur
          </a>

          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Links */}
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav mx-lg-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="/perfumes">
                  Perfumes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/brands">
                  Brands
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/outfits">
                  Outfits
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/guide">
                  Guide
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/shop">
                  Shop
                </a>
              </li>
            </ul>

            {/* Right Side */}
            <div className="nav-right d-flex align-items-center gap-2 px-4">
              <div className="search-wrapper">
                <FaSearch className="search-icon" />
                <input type="search" placeholder="Search" className="search" />
              </div>
              <div>
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-cart-dash"
                  viewBox="0 0 16 16"
                  style={{ marginLeft: "5px" }}
                >
                  <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" />
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                </svg>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Nav;
