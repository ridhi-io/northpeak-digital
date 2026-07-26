import "./Testimonials.css";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, NovaTech",
    image: "SM",
    review:
      "NorthPeak completely transformed our online presence. The new website doubled our conversions within just a few weeks.",
  },
  {
    name: "James Walker",
    role: "Founder, Pixel Studio",
    image: "JW",
    review:
      "Working with NorthPeak was effortless. Their team delivered a premium product on time with exceptional attention to detail.",
  },
  {
    name: "Emma Carter",
    role: "Marketing Director, Elevate",
    image: "EC",
    review:
      "From design to development, every step was smooth. The final product exceeded our expectations and our customers love it.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <span>TESTIMONIALS</span>

          <h2>
            Trusted By Businesses
            <br />
            Around The World
          </h2>

          <p>
            We build long-term partnerships by delivering modern digital
            experiences that help businesses grow.
          </p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="review">
                "{item.review}"
              </p>

              <div className="client">
                <div className="avatar">
                  {item.image}
                </div>

                <div className="client-info">
                  <p className="client-name">{item.name}</p>
                  <span className="client-role">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;