import "./Hero.css";
import Dashboard from "./Dashboard/Dashboard";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

function Hero() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-bg-glow"></div>

      <div className="container hero-container">
        {/* LEFT */}

        <div className="hero-left">
          <span className="hero-badge">
            DIGITAL GROWTH AGENCY
          </span>

          <h1>
            Build Digital
            <br />
            Experiences That
            <span> Drive Growth.</span>
          </h1>

          <p>
            We help startups and ambitious businesses build beautiful
            websites, Shopify stores and digital experiences that generate
            more leads, increase conversions and grow revenue.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() => scrollToSection("contact")}
            >
              Start Your Project
              <FaArrowRight />
            </button>

            <button
              className="secondary-btn"
              onClick={() => scrollToSection("services")}
            >
              Explore Services
            </button>
          </div>

          <div className="hero-trust">
            <div>
              <FaCheckCircle />
              <span>150+ Projects</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>98% Satisfaction</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}

        <div className="hero-right">
          <Dashboard />
        </div>
      </div>
    </section>
  );
}

export default Hero;