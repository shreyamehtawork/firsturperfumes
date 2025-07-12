import react from "react";
import "../styling/Nav.css";
import { FaSearch } from "react-icons/fa";

function Nav() {
  return (
    <div className="container">
      <nav className=" navbar navbar-expand-lg">
        <a className="brandname navbar-brand col-lg-4" href="/">
          firstur
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample11"
          aria-controls="navbarsExample11"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse d-lg-flex"
          id="navbarsExample11"
        >
          <ul className="navbar-nav col-lg-6 justify-content-lg-center">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/perfumes">
                Perfumes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/brands">
                brands
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/outfits">
                Outfits
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="/guide">
                Guide
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="/shop">
                Shop
              </a>
            </li>
          </ul>
          <div className="d-lg-flex col-lg-6 justify-content-lg-end">
            <div className="d-flex align-items-center gap-2 search-wrapper">
              <FaSearch className="search-icon" />
              <input
                type="search"
                placeholder="Search"
                className="search"
              ></input>
            </div>
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
      </nav>
    </div>
  );
}
export default Nav;
