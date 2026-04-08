import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <Link to="/">
        <img src="/Deep-Savanna-Logo-3-Xbg.png" className="logo" />
      </Link>

      <div className="nav-right">

        <Link to="/" className="nav-link">Home</Link>

        <div 
          className="dropdown"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <span className="nav-link">Services ▾</span>

          {open && (
            <div className="dropdown-menu">
              <Link to="/equipment">Equipment & Machinery</Link>
              <Link to="/materials">Building Materials</Link>
              <Link to="/construction">Construction</Link>

              <a href="https://hss-prime-farms-ltd.co.ke/" target="_blank" rel="noreferrer">
                Agriculture
              </a>
            </div>
          )}
        </div>

        <Link to="/contact" className="nav-link">Contact Us</Link>

      </div>
    </nav>
  );
}

export default Navbar;
