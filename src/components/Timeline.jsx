"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import "./Timeline.css";

const timelineData = [
  {
    year: "2024 - Present",
    role: "Frontend Developer",
    company: "Aceternity Pvt. Ltd.",
    description: "Built and maintained UI components, implemented responsive designs, and improved web performance across multiple high-traffic platforms.",
    skills: ["React.js", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    year: "2022 - 2024",
    role: "UI/UX Designer",
    company: "Creative Minds Studio",
    description: "Designed web and mobile interfaces, created wireframes, and collaborated with developers to implement interactive UI components.",
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
  },
  {
    year: "2018 - 2022",
    role: "Bachelor of Technology",
    company: "XYZ University",
    description: "Major: Computer Science & Engineering. Achievements: Dean's List, Hackathons Winner, College Projects Excellence Award.",
    skills: ["Data Structures", "Algorithms", "Web Dev", "Python"],
  },
];

const TimelineDemo = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div ref={containerRef} className="timeline-outer">
      <div className="timeline-header">
        <h2 className="timeline-title">EXPERIENCE</h2>
        <div className="title-accent"></div>
      </div>

      <div className="timeline-content">
        <div className="timeline-line-container">
          <div className="timeline-base-line" />
          <motion.div style={{ scaleY, originY: 0 }} className="timeline-active-line" />
        </div>

        <div className="timeline-cards">
          {timelineData.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TimelineItem = ({ item, index }) => {
  const isLeft = index % 2 === 0;
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - card.left;
    const y = e.clientY - card.top;
    const centerX = card.width / 2;
    const centerY = card.height / 2;
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;

    setRotate({ x: rotateX, y: rotateY });
  };

  const resetRotate = () => setRotate({ x: 0, y: 0 });

  return (
    <motion.div 
      className={`timeline-item ${isLeft ? "item-left" : "item-right"}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="special-card-container" 
           onMouseMove={handleMouseMove} 
           onMouseLeave={resetRotate}
           style={{
             transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
             transition: "transform 0.1s ease"
           }}>
        
        {/* Animated Border Light */}
        <div className="border-glow-animation"></div>

        <div className="card-inner-content">
          <span className="year-label">{item.year}</span>
          <h3 className="role-text">{item.role}</h3>
          <div className="company-row">{item.company}</div>
          <p className="description-text">{item.description}</p>
          <div className="skills-grid">
            {item.skills.map((s, i) => <span key={i} className="skill-pill">{s}</span>)}
          </div>
        </div>
      </div>
      <div className="timeline-node" />
    </motion.div>
  );
};

export default TimelineDemo;