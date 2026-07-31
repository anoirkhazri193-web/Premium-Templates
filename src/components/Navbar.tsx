// @ts-nocheck
import { Link } from "react-router-dom";
import { FaCode } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {

  return (
    <header className="navbar">

      <div className="navbar-container">

        <Link to="/" className="logo">
          <FaCode />
          <span>
            Premium Templates
          </span>
        </Link>


        <nav className="nav-links">

          <Link to="/">
            Home
          </Link>

<Link to="/#templates">
  Templates
</Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/contact">
            Contact
          </Link>

        </nav>


        <Link 
          to="/templates" 
          className="nav-btn"
        >
          Browse Templates
        </Link>


      </div>

    </header>
  );
}


export default Navbar;