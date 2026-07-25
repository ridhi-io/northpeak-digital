import "./Services.css";
import {
  FaCode,
  FaShoppingCart,
  FaPalette,
  FaSearch,
  FaRocket,
  FaRobot,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    desc: "Modern, lightning-fast websites built using React, Node.js and scalable technologies.",
  },
  {
    icon: <FaShoppingCart />,
    title: "Shopify Development",
    desc: "High-converting Shopify stores designed to increase sales and improve customer experience.",
  },
  {
    icon: <FaPalette />,
    title: "UI / UX Design",
    desc: "Beautiful interfaces crafted to improve usability, engagement and brand perception.",
  },
  {
    icon: <FaSearch />,
    title: "SEO Optimization",
    desc: "Improve search rankings with technical SEO, speed optimization and content strategy.",
  },
  {
    icon: <FaRocket />,
    title: "Growth Marketing",
    desc: "Performance marketing campaigns focused on customer acquisition and business growth.",
  },
  {
    icon: <FaRobot />,
    title: "AI Automation",
    desc: "Automate repetitive workflows using AI tools and intelligent business systems.",
  },
];

function Services() {
  const scrollToContact = () => {
    const section = document.getElementById("contact");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="section-header">
          <span>OUR SERVICES</span>

          <h2>
            Everything You Need To
            <br />
            Scale Your Business
          </h2>

          <p>
            We combine design, development and digital strategy
            to build experiences that drive measurable results.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.desc}</p>

              <button onClick={scrollToContact}>
                Learn More
                <FaArrowRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;