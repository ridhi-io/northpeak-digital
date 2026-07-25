import "./FAQ.css";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How long does a project take?",
    answer:
      "Most websites are completed within 2–4 weeks depending on the project scope.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes. We offer maintenance, updates, performance monitoring and priority support.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. We modernize outdated websites while improving speed, SEO and user experience.",
  },
  {
    question: "Do you work internationally?",
    answer:
      "Yes. We work remotely with clients across different countries and time zones.",
  },
];

function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="faq section" id="faq">
      <div className="container">

        <div className="section-header">
          <span>FAQ</span>

          <h2>Frequently Asked Questions</h2>

          <p>
            Everything you need to know before starting your project.
          </p>
        </div>

        <div className="faq-list">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${active === index ? "active" : ""}`}
              onClick={() => setActive(active === index ? -1 : index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <FaChevronDown />
              </div>

              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;