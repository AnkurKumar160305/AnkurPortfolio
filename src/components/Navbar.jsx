import React, { useState, useEffect } from "react";
import "./Navbar.css";
import githubLogo from "../assets/githubfinal.png";
import linkedinLogo from "../assets/linkedinfinal.png";
import leetcodeLogo from "../assets/leetcode.svg";

const menuItems = [
  { label: "Home", link: "#home" },
  { label: "About", link: "#about" },
  { label: "Skills", link: "#skills" },
  { label: "Projects", link: "#projects" },
  { label: "Contact", link: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile && menuOpen) setMenuOpen(false);
  }, [isMobile, menuOpen]);

  return (
    <nav className="navbar">
      <p className="navTitle">Ankur</p>

      {!isMobile && (
        <ul className="navLinks">
          {menuItems.map((item, idx) => (
            <li key={idx} className="navItem">
              <a href={item.link} className="navLink">{item.label}</a>
            </li>
          ))}
        </ul>
      )}

      <div className="rightWrapper">
        <div className="socialIconsWrapper">
          <a href="https://github.com/AnkurKumar160305" target="_blank" rel="noopener noreferrer">
            <img className="socialIcon" src={githubLogo} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/ankur-kumar-833026284/" target="_blank" rel="noopener noreferrer">
            <img className="socialIcon" src={linkedinLogo} alt="LinkedIn" />
          </a>
          <a href="https://leetcode.com/u/Ankur160305/" target="_blank" rel="noopener noreferrer">
            <img className="socialIcon" src={leetcodeLogo} alt="LeetCode" />
          </a>
        </div>

        {isMobile && (
          <div className="hamburgerWrapper">
            <button
              className={`hamburger ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div className={`mobileOverlay ${menuOpen ? "show" : ""}`}>
              <button className="closeBtn" onClick={() => setMenuOpen(false)}>&times;</button>
              <ul className="mobileMenu">
                {menuItems.map((item, idx) => (
                  <li key={idx} className="mobileItem">
                    <a
                      href={item.link}
                      className="mobileLink"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
