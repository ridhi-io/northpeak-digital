import "./Contact.css";
import { useState } from "react";
import axios from "axios";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      await axios.post(
        "http://localhost:5000/api/contact",
        form
      );

      setSubmitted(true);

      setForm({
        name: "",
        email: "",
        company: "",
        message: "",
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 4000);

    } catch (error) {
      console.error(error);

      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="contact section" id="contact">
      <div className="container contact-container">

        {/* LEFT */}

        <div className="contact-info">

          <span className="contact-tag">
            CONTACT US
          </span>

          <h2>
            Let's Build Something Amazing Together
          </h2>

          <p>
            Have an idea for your next project?
            We'd love to hear from you.
            Send us a message and we'll get back within 24 hours.
          </p>

          <div className="info-card">
            <FaEnvelope />
            <span>hello@northpeakdigital.com</span>
          </div>

          <div className="info-card">
            <FaPhoneAlt />
            <span>+44 20 1234 5678</span>
          </div>

          <div className="info-card">
            <FaMapMarkerAlt />
            <span>London, United Kingdom</span>
          </div>

        </div>

        {/* RIGHT */}

        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="company"
            placeholder="Company"
            value={form.company}
            onChange={handleChange}
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Tell us about your project..."
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Send Message
          </button>

          {submitted && (
            <div className="success-message">
              ✅ Thank you! We'll get back to you within 24 hours.
            </div>
          )}

        </form>

      </div>
    </section>
  );
}

export default Contact;