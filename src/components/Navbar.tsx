import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 20) {
        setShowNavbar(true);
      } else if (currentScroll > lastScroll) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* =========================
          NAVBAR
      ========================= */}

      <header className={`navbar ${showNavbar ? "show" : "hide"}`}>
        <div className="navbar-container">

          {/* LOGO */}
          <Link to="/" className="logo-styled">
            <img
              src="/logo.png"
              alt="Premium Templates"
              className="nav-logo-img"
            />
          </Link>


          {/* Mobile Menu Button */}
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>


          {/* Navigation */}
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

          </nav>


          {/* Browse Templates */}
          <Link
            to="/templates"
            className="nav-btn desktop-btn"
          >
            Browse Templates
          </Link>

        </div>
      </header>


      {/* =========================
          MOVING BANNER
      ========================= */}

      <div className="big-banner">

        <div className="big-banner-track">

          <h1 className="big-banner-text">
            PREMIUM TEMPLATES
          </h1>

          <span className="big-banner-star">
            ✦
          </span>

          <h1 className="big-banner-text">
            PREMIUM TEMPLATES
          </h1>

          <span className="big-banner-star">
            ✦
          </span>

        </div>

      </div>
    </>
  );
}

export default Navbar;