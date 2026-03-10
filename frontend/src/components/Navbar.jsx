import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid px-4">

        {/* Logo */}
        <a className="navbar-brand text-white fw-light" href="#">
          Logo
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navMenu">

          {/* Center Links */}
          <ul className="navbar-nav mx-auto gap-lg-4 text-center">
            <li className="nav-item">
              <a className="nav-link text-white">Tech</a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white">Bags & Wallets</a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white">Work Essentials</a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white">Gifting</a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white">New Arrivals</a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white">Collections</a>
            </li>
          </ul>

          {/* Right Icons */}
          <div className="d-flex align-items-center gap-4 nav-icons">
            <i className="bi bi-search text-white"></i>
            <i className="bi bi-person text-white"></i>
            <i className="bi bi-bag text-white"></i>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;