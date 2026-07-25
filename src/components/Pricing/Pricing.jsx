import "./Pricing.css";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    name: "Starter",
    price: "£499",
    description: "Perfect for startups and small businesses.",
    features: [
      "Landing Page",
      "Responsive Design",
      "Basic SEO",
      "1 Week Delivery",
    ],
    featured: false,
  },
  {
    name: "Growth",
    price: "£999",
    description: "Most popular choice for growing businesses.",
    features: [
      "Multi-page Website",
      "Advanced SEO",
      "Performance Optimized",
      "Analytics Setup",
      "Priority Support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored digital solutions for large businesses.",
    features: [
      "Unlimited Pages",
      "Custom Integrations",
      "AI Automation",
      "Dedicated Support",
      "Maintenance",
    ],
    featured: false,
  },
];

function Pricing() {
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
    <section className="pricing section" id="pricing">
      <div className="container">
        <div className="section-header">
          <span>PRICING</span>

          <h2>
            Flexible Plans
            <br />
            For Every Business
          </h2>

          <p>
            Transparent pricing with no hidden costs. Choose a plan that
            matches your business goals.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${plan.featured ? "featured" : ""}`}
            >
              {plan.featured && (
                <div className="popular-badge">Most Popular</div>
              )}

              <h3>{plan.name}</h3>

              <h1>{plan.price}</h1>

              <p>{plan.description}</p>

              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <FaCheck />
                    {feature}
                  </li>
                ))}
              </ul>

              <button onClick={scrollToContact}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;