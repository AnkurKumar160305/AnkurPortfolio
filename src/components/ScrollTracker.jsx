"use client";

import React, { useEffect, useState } from "react";
import { motion, useSpring, useScroll } from "motion/react";
import "./ScrollTracker.css";

export default function ScrollTracker() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Optional: show scroll direction
  const [scrollDirection, setScrollDirection] = useState("down");
  useEffect(() => {
    let lastScroll = window.scrollY;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrollDirection(currentScroll > lastScroll ? "down" : "up");
      lastScroll = currentScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      {/* Down Scroll Indicator */}
      {scrollDirection === "down" && (
        <div className="scroll-indicator">
          <span className="arrow">&#8595;</span>
          <p>Scroll Down</p>
        </div>
      )}
    </>
  );
}
