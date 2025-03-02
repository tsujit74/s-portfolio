import React from "react";
import { Link } from "react-router-dom";
import "../Home/home.css";

function Home() {
  return (
    <div>
      <div className="home-container" id="home">
        <div className="home-content ">
          <div className="image-container">
            <img
              src="images/sujit2.jpg"
              alt="Sujit Thakur"
              className="profile-photo"
            />
          </div>
          <div className="text-container">
            <p className="intro-text">
              <h3 className="animated-text highlight">
                <span className="word">Full</span>
                <span className="word">Stack</span>
                <span className="word">Web</span>
                <span className="word">Developer.</span>
              </h3>
              <p>
                Hi, I’m <span className="highlight">Sujit Thakur</span>, a
                passionate <strong>Full-Stack Web Developer</strong> from Patna,
                India. I love exploring new technologies and building seamless,
                efficient web solutions. Always eager to tackle challenges, I
                strive to create impactful projects that enhance user
                experiences and drive innovation.
              </p>{" "}
            </p>
            <div className="hero-buttons">
              <a
                href="doc/Sujit_Resume.pdf"
                download
                className="btn download-btn"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
