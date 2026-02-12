import React from "react";
import { Link } from "react-router-dom";
import { CometCard } from "./ui/comet-card";
import "./Projectcard.css";
import { projects } from "../data/projects";
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";

const Projectcard = () => {
  return (
    <section className="cards" id="projects">

      {/* ===== Projects Heading ===== */}
      <div className="projects-heading">
        <h2 className="projects-title">
          My <span>Projects</span>
        </h2>
        <p className="projects-subtitle">
          Turning <span>ideas</span> into <span>interactive experiences</span> with code & creativity
        </p>
      </div>

      {/* ===== Project Cards ===== */}
      <div className="cards-grid">
        {projects.map((project) => (
          <CometCard key={project.id}>
            <div
              className="card comet-card"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Image */}
              <Link to={project.liveLink} className="image-wrapper">
                <img src={project.image} alt={project.title} />
                <span className="view-overlay">View Project</span>
              </Link>

              {/* Content */}
              <div className="content">
                <p className="heading">{project.title}</p>
                <p className="text">{project.description}</p>

                {/* Tech Stack */}
                <div className="tech-stack">
                  {project.tech.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="buttons">
                  <Link to={project.liveLink}>
                    <button className="primary-btn">Explore</button>
                  </Link>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-btn github-btn"
                  >
                    <img
                      className="icon github"
                      src={githubIcon}
                      alt="GitHub"
                    />
                  </a>

                  <a
                    href={project.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-btn linkedin-btn"
                  >
                    <img
                      className="icon linkedin"
                      src={linkedinIcon}
                      alt="LinkedIn"
                    />
                  </a>
                </div>
              </div>
            </div>
          </CometCard>
        ))}
      </div>
    </section>
  );
};

export default Projectcard;
