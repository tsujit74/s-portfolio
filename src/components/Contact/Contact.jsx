import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "../Contact/contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const formRef = useRef(); // Use ref for form

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSuccess(false), 3000);
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Error sending message. Try again!");
      });
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
        <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
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

        {success && (
          <p className="success-message">Message sent successfully! ✅</p>
        )}
      </div>
    </div>
  );
}
