import "./Navbar.css";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-wrapper">

        <a href="#hero" className="logo">
          <span className="logo-dot"></span>
          NorthPeak
        </a>

        <nav
  id="primary-navigation"
  className={menuOpen ? "nav-links active" : "nav-links"}
>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

        <button
  className="primary-btn nav-btn"
  onClick={() => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  }}
>
  Get Started
</button>

        <button
  className="menu-btn"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
  aria-expanded={menuOpen}
  aria-controls="primary-navigation"
>
  {menuOpen ? <FaTimes /> : <FaBars />}
</button>

      </div>
    </header>
  );
}

export default Navbar;