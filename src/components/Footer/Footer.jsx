import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-container">

        <div>

          <h2>NorthPeak Digital</h2>

          <p>
            Building premium digital experiences that help
            businesses grow faster.
          </p>

        </div>

        <div className="footer-links">

          <a href="#hero">Home</a>
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-social">

          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>

        </div>

      </div>

      <div className="copyright">

        © 2026 NorthPeak Digital. All Rights Reserved.

      </div>

    </footer>
  );
}
<p>
  Built for{" "}
  <a
    href="https://digitalheroesco.com"
    target="_blank"
    rel="noreferrer"
  >
    Digital Heroes Training Task
  </a>
</p>

export default Footer;