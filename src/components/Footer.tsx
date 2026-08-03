// @ts-nocheck
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaDiscord } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>Premium Templates</h2>

          <p>
            High quality website templates
            for modern businesses and developers.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>

          <Link to="/templates">Templates</Link>

          <Link to="/about">About</Link>

          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>
            Email:{" "}
            <a
              href="mailto:support.anwer@gmail.com"
              className="footer-email"
            >
              support.anwer@gmail.com
            </a>
          </p>

          <p>Available 24/7 Support</p>

          <a
            href="https://discord.gg/fRnPPhv7XF"
            target="_blank"
            rel="noopener noreferrer"
            className="discord-link"
          >
            <FaDiscord className="discord-icon" />
            Join our Discord Community
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Premium Templates. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;