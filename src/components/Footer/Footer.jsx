import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "../Footer/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Sujit Thakur. All Rights Reserved.</p>
        <div className="footer-icons">
          <a href="https://www.linkedin.com/in/sujit-thakur-463b45229/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} className="icon linkedin" />
          </a>
          <a href="https://github.com/tsujit74" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} className="icon github" />
          </a>
          <a href="mailto:tsujeet440@gmail.com">
            <FaEnvelope size={30} className="icon email" />
          </a>
        </div>
      </div>
    </footer>
  );
}
