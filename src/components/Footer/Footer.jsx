import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">

        {/* Brand */}

        <div className="footer-brand">
          <h2>NorthPeak</h2>

          <p>
            We build modern digital experiences that help startups and
            ambitious businesses grow through beautiful websites and
            high-converting digital solutions.
          </p>
        </div>

        {/* Quick Links */}

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="#hero">Home</a>
          <a href="#services">Services</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Social Links */}

        <div className="footer-social">
          <h3>Connect</h3>

          <div className="social-icons">

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our GitHub profile"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our LinkedIn profile"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit our Instagram profile"
            >
              <FaInstagram />
            </a>

          </div>
        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} NorthPeak Digital. All rights reserved.
        </p>

        <p>
          Built for{" "}
          <a
            href="https://digitalheroesco.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Digital Heroes Training Task
          </a>
        </p>

      </div>
    </footer>
  );
}

export default Footer;