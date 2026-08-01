// @ts-nocheck
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo Jdid b el classes elli 7atthom */}
        <Link to="/" className="logo-styled">
          <div className="logo-icon-container">
            <img src="/icon.png" alt="Logo" className="nav-logo-img" />
          </div>
          <span className="logo-text">Premium Templates</span>
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/templates">Templates</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Link to="/templates" className="nav-btn">
          Browse Templates
        </Link>

      </div>
    </header>
  );
}

export default Navbar;