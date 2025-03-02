import React, { useState } from "react";
import "../Projects/project.css";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "CONCRETION",
      description:
        "Created a social networking platform allowing users to connect and expand their network. Implemented secure authentication and a responsive user interface. Enabled users to send & accept friend requests securely.",
      techStack: ["NodeJS", "Express", "MongoDb", "JavaScript", "CSS", "HTML"],
      type: "Frontend",
      liveDemo: "https://concretion-project.vercel.app/",
      githubLink: "https://github.com/tsujit74/concretionProject",
    },
    {
      id: 2,
      title: "Apna Video",
      description:
        "Built a real-time video conferencing app with low-latency peer-to-peer video calls. Implemented real-time authentication & dynamic room management and Optimized WebRTC handling, reducing video lag. Secured backend with JWT authentication",
      techStack: [
        "React.js",
        "Node.js",
        "Express.js",
        "WebRTC",
        "MongoDB",
        "CSS",
      ],
      type: "Full Stack",
      liveDemo: "https://apnavideofrontend.onrender.com/",
      githubLink: "https://github.com/tsujit74/apnavideo",
    },
    {
      id: 3,
      title: "Wanderlust",
      description:
        "Built a full-stack travel platform with TomTom's API for real-time maps. Designed a responsive UI and implemented Passport Authentication. Built a trending destinations feature based on user views.",
      techStack: ["NodeJS", "Express", "MongoDb", "JavaScript", "CSS", "HTML"],
      type: "Full Stack",
      liveDemo: "https://project-wander.onrender.com/listings",
      githubLink: "https://github.com/tsujit74/project",
    },
    {
      id: 4,
      title: "Spotify Clone",
      description:
        "Developed a responsive UI mimicking Spotify using HTML and CSS.  Optimized for both desktop and mobile devices.",
      techStack: ["Html", "CSS"],
      type: "Frontend",
      liveDemo: "https://tsujit74.github.io/Spotify-clone/",
      githubLink: "https://github.com/tsujit74/Spotify-clone",
    },
  ];

  return (
    <div>
      <div id="projects" className="projects-section">
        <h2>My Projects</h2>
        <div className="projects-container">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <div className="text">
                <p>{project.description}</p>
                <p>
                  <strong>Type:</strong> {project.type}
                </p>
                <p>
                  <strong>Tech Stack:</strong> {project.techStack.join(", ")}
                </p>
              </div>
              <div className="buttons">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn live-demo"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn github"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}

          <div className="project-card view-more-card">
            <h3>Many More Projects</h3>
            <p>Explore more of my projects on GitHub.</p>
            <a
              href="https://github.com/tsujit74"
              target="_blank"
              rel="noopener noreferrer"
              className="btn github"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
