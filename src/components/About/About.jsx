import React from "react";
import "../About/about.css";

function About() {
  return (
    <div>
      <div className="about-container" id="about">
        <h1 className="text-center mb-2">About Me</h1>
        <div className="about-content ">
          <div className="about-text p-4">
            {/* <div className="img-section ">
              <img src="/images/sujit.jpg" alt="Sujit" />
            </div> */}
            <div>
              <p>
                Hi, I’m <span>Sujit Thakur</span>, a passionate{" "}
                <strong>Full-Stack Web Developer</strong> from
                <strong>Patna, India📍</strong>. I have a solid foundation in{" "}
                <span>Computer Science & Engineering</span>
                and am currently pursuing my <span>B.Tech</span> with a CGPA of
                7.96.
              </p>
              <p>
                I specialize in{" "}
                <strong>
                  MERN Stack (MongoDB, Express.js, React, Node.js)
                </strong>{" "}
                and <strong>Java</strong>, crafting scalable and
                high-performance web applications.
              </p>
              <p>
                With strong experience in <strong>frontend development</strong>{" "}
                using React, Tailwind CSS, and modern UI frameworks, I build
                interactive and user-friendly interfaces. On the{" "}
                <strong>backend</strong>, I develop robust APIs using
                <strong>Node.js, Express.js</strong>, and <strong>Java</strong>{" "}
                to ensure seamless application performance.
              </p>
              <p>
                I’m always excited to{" "}
                <strong>
                  learn new technologies, optimize code, and solve complex
                  problems
                </strong>
                . Whether it's{" "}
                <strong>
                  building full-stack applications, improving backend
                  efficiency, or designing scalable architectures
                </strong>
                , I love turning ideas into reality.
              </p>
              <p>Let's connect and create something amazing together! 🚀</p>
            </div>
          </div>
          <h2 style={{textAlign:"center",paddingTop:"20px"}}>Education Journey</h2>
          <div className="education-container" id="education">
          
            <section id="education" className="education-section">
              

              <div className="education-card">
                <h3>Bachelor of Technology (B.Tech)</h3>
                <p>
                  <strong>Branch:</strong> Computer Science & Engineering
                </p>
                <p>
                  <strong>CGPA:</strong> 7.96
                </p>
                <p>
                  <strong>Year:</strong> November 2021 - Present
                </p>
                <p>
                  <strong>Institute:</strong> Siddharth Institute Of Engineering & Technology
                </p>
              </div>

              <div className="education-card">
                <h3>Higher Secondary (12th Grade)</h3>
                <p>
                  <strong>Stream:</strong> Science (PCM)
                </p>
                <p>
                  <strong>Percentage:</strong> 65.4
                </p>
                <p>
                  <strong>Year:</strong> April 2020 - March 2021
                </p>
                <p>
                  <strong>School:</strong> R.S.S. SCIENCE COLLEGE, DUMRA, SITAMARHI
                </p>
              </div>

              <div className="education-card">
                <h3>Secondary Education (10th Grade)</h3>
                <p>
                  <strong>Percentage:</strong> 64.4
                </p>
                <p>
                  <strong>Year:</strong> April 2018 - March 2019
                </p>
                <p>
                  <strong>School:</strong> S R S HIGH SCHOOL RADHAUR, SITAMARHI
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
