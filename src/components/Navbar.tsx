import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <Link to="/" className="logo-styled">
          <div className="logo-icon-container">
            <img src="/icon.png" alt="Logo" className="nav-logo-img" />
          </div>
          <span className="logo-text">Premium Templates</span>
        </Link>

        {/* Mobile menu button */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Links */}
        <nav className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link
            to="/"
            className="nav-item"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/templates"
            className="nav-item"
            onClick={() => setMenuOpen(false)}
          >
            Templates
          </Link>

          <Link
            to="/about"
            className="nav-item"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <Link
            to="/contact"
            className="nav-item"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          {/* Mobile button */}
          <Link
            to="/templates"
            className="nav-btn mobile-btn"
            onClick={() => setMenuOpen(false)}
          >
            Browse Templates
          </Link>
        </nav>

        {/* Desktop button */}
        <Link to="/templates" className="nav-btn desktop-btn">
          Browse Templates
        </Link>

      </div>
    </header>
  );
}

export default Navbar;