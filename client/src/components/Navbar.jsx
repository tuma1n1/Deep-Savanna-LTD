import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setServicesOpen(false);
        setMobileOpen(false);
        setMobileServicesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeMenus = () => {
    setServicesOpen(false);
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <nav className="nav" ref={navRef}>
      <Link to="/" onClick={closeMenus}>
        <img
          src="/Deep-Savanna-Logo-3-Xbg.png"
          className="logo"
          alt="Deep Savanna"
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="nav-right">
        <Link to="/" className="nav-link" onClick={closeMenus}>
          Home
        </Link>

        <div className="dropdown">
          <button
            className="nav-link dropdown-trigger"
            onClick={() => setServicesOpen(!servicesOpen)}
          >
            Services ▾
          </button>

          {servicesOpen && (
            <div className="dropdown-menu">
              <Link to="/equipment" onClick={closeMenus}>
                Equipment & Machinery
              </Link>

              <Link to="/materials" onClick={closeMenus}>
                Building Materials
              </Link>

              <Link to="/construction" onClick={closeMenus}>
                Construction
              </Link>

              <a
                href="https://hss-prime-farms-ltd.co.ke/"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenus}
              >
                Agriculture
              </a>
            </div>
          )}
        </div>

        <Link to="/contact" className="nav-link" onClick={closeMenus}>
          Contact Us
        </Link>
      </div>

      {/* Hamburger */}
      <button
        className={`hamburger ${mobileOpen ? "active" : ""}`}
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={closeMenus}>
            Home
          </Link>

          <button
            className="mobile-services-btn"
            onClick={() =>
              setMobileServicesOpen(!mobileServicesOpen)
            }
          >
            Services ▾
          </button>

          {mobileServicesOpen && (
            <div className="mobile-submenu">
              <Link to="/equipment" onClick={closeMenus}>
                Equipment & Machinery
              </Link>

              <Link to="/materials" onClick={closeMenus}>
                Building Materials
              </Link>

              <Link to="/construction" onClick={closeMenus}>
                Construction
              </Link>

              <a
                href="https://hss-prime-farms-ltd.co.ke/"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenus}
              >
                Agriculture
              </a>
            </div>
          )}

          <Link to="/contact" onClick={closeMenus}>
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;