// @ts-nocheck
import "./Footer.css";
import { FaDiscord } from "react-icons/fa";

function Footer() {

  return (
    <footer className="footer">

      <div className="footer-container">


        <div className="footer-brand">

          <h2>
            Premium Templates
          </h2>

          <p>
            High quality website templates
            for modern businesses and developers.
          </p>

        </div>



        <div className="footer-links">

          <h3>
            Quick Links
          </h3>

          <a href="/">
            Home
          </a>

          <a href="#templates">
            Templates
          </a>

          <a href="/about">
            About
          </a>

          <a href="/contact">
            Contact
          </a>

        </div>



        <div className="footer-contact">

          <h3>
            Contact
          </h3>

          <p>
            Email: support.anwer@gmail.com
          </p>

          <p>
            Available 24/7 Support
          </p>

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