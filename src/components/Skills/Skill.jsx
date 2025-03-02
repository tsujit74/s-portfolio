import React from "react";
import "../Skills/skill.css";

function Skill() {
  return (
    <div>
      <div id="skills" className="skills-section">
        <h2>My Skills</h2>
        <div className="skills-container">
          <div className="skill-card">
            <img
              src="/images/frontend.jpg"
              alt="Frontend Development"
              className="skill-image"
            />
            <div className="skill-text">
              <h3>Frontend Development</h3>
              <h4>HTML, CSS, JavaScript</h4>
              <p>
                Proficient in building responsive and visually appealing web
                pages using HTML, CSS, and JavaScript. Experienced in creating
                dynamic and interactive user experiences.
              </p>
            </div>
          </div>

          <div className="skill-card">
            <img
              src="/images/backend.webp"
              alt="Backend Development"
              className="skill-image"
            />
            <div className="skill-text">
              <h3>Backend Development</h3>
              <h4>Node.js, MongoDb, MySql</h4>
              <p>
                Experienced in building scalable backend systems using Node.js,
                MongoDB, and MySQL. Proficient in developing RESTful APIs and
                managing databases efficiently.
              </p>
            </div>
          </div>

          <div className="skill-card">
            <img
              src="images/framework.webp"
              alt="Database Management"
              className="skill-image"
            />
            <div className="skill-text">
              <h3>Framework</h3>
              <h4>ReactJs, Next.Js Express</h4>
              <p>
                Experienced in building dynamic web applications using React.js,
                Next.js, and Express. Skilled in creating fast, scalable, and
                efficient full-stack solutions.
              </p>
            </div>
          </div>

          <div className="skill-card">
            <img
              src="images/program.jpg"
              alt="Database Management"
              className="skill-image"
            />
            <div className="skill-text">
              <h3>Programming Language</h3>
              <h4>Java</h4>
              <p>
                Strong foundation in Java, focusing on object-oriented
                programming, data structures, and algorithmic problem-solving.
              </p>
            </div>
          </div>

          <div className="skill-card">
            <img
              src="images/tool.webp"
              alt="Database Management"
              className="skill-image"
            />
            <div className="skill-text">
              <h3>Tools & Technology</h3>
              <h4>Git, Github, Postman API</h4>
              <p>
                Experienced in version control with Git and GitHub, along with
                API testing and debugging using Postman for seamless development
                workflows.
              </p>
            </div>
          </div>

          <div className="skill-card">
            <img
              src="images/soft.webp"
              alt="Database Management"
              className="skill-image"
            />
            <div className="skill-text">
              <h3>Soft Skills</h3>
              <h4>Collaboration, Time Management</h4>
              <p>
                Strong collaboration and time management skills, enabling
                effective teamwork, efficient task prioritization, and timely
                project completion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
