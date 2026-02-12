import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaRocket, FaPaintBrush } from 'react-icons/fa';
import './About.css';

const skills = [
  { name: "React", level: 90 },
  { name: "JavaScript", level: 95 },
  { name: "Node.js", level: 85 },
  { name: "HTML & CSS", level: 95 },
  { name: "TypeScript", level: 80 },
  { name: "Python", level: 75 },
  { name: "Git & GitHub", level: 90 },
  { name: "UI/UX Design", level: 70 }
];

const About = () => {
  return (
    <div className="about-section" id="about">

      {/* TITLE */}
      <motion.h1
        className="about-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h1>

      {/* MAIN CONTENT */}
      <div className="about-content">

        {/* LEFT SIDE */}
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="about-text">
            Hi! I'm <span className="highlight">Ankur</span>, a passionate software developer focused on building <span className="highlight">efficient</span> and <span className="highlight">user-friendly</span> applications.
            <br /><br />
            I specialize in crafting modern interfaces and scalable backend systems with <span className="highlight">clean code</span> and <span className="highlight">high performance</span>.
            <br /><br />
            I enjoy exploring <span className="highlight">emerging technologies</span>, cloud platforms, and AI-driven solutions to create innovative and impactful projects.
            <br /><br />
            I also love improving <span className="highlight">UI/UX design</span>, collaborating with teams, and contributing to open-source communities.
          </p>

          <div className="tech-grid">
            <TechBox icon={<FaCode />} title="Frontend" desc="Responsive and interactive UI using React, HTML5 & CSS3." delay={0} />
            <TechBox icon={<FaServer />} title="Backend" desc="Robust APIs, server-side logic, and database management with Node.js." delay={0.1} />
            <TechBox icon={<FaRocket />} title="DevOps" desc="Deployment automation, CI/CD pipelines, and cloud infrastructure." delay={0.2} />
            <TechBox icon={<FaPaintBrush />} title="UI/UX" desc="Designing intuitive, modern, and seamless user experiences." delay={0.3} />
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="skills-title">My Skills</h2>
          <p className="skills-desc">Continuously improving my skills with modern technologies to deliver high-quality solutions.</p>
          <div className="skills-list">
            {skills.map((skill, idx) => (
              <div key={idx} className="skill">
                <div className="skill-name">
                  {skill.name} <span className="skill-percent">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

// Helper Component for Tech Box to reduce clutter
const TechBox = ({ icon, title, desc, delay }) => (
  <motion.div
    className="tech-box"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.5 + delay }}
    whileHover={{ scale: 1.05, rotate: -1 }}
    viewport={{ once: true }}
  >
    <div className="tech-icon-wrapper">{icon}</div>
    <h3>{title}</h3>
    <p>{desc}</p>
  </motion.div>
);

export default About;
