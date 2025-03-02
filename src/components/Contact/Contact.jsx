import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "../Contact/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Sending data to FormSubmit (Replace with your email)
    const response = await fetch("https://formsubmit.co/tsujeet440@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setSuccess(false), 3000);
    } else {
      alert("Error sending message. Try again!");
    }
  };

  return (
    <div id="contact" className="contact-section">
      <h2>Contact Me</h2>

      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/sujit-thakur-463b45229/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} className="icon linkedin" />
        </a>
        <a
          href="https://github.com/tsujit74"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} className="icon github" />
        </a>
        <a href="mailto:tsujeet440@gmail.com">
          <FaEnvelope size={30} className="icon email" />
        </a>
      </div>

      <div className="contact-container">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Success Message */}
        {success && (
          <p className="success-message">Message sent successfully! ✅</p>
        )}
      </div>
    </div>
  );
}
