"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SiLeetcode, SiGeeksforgeeks, SiCodingninjas } from "react-icons/si";
import { MdOutlineInsights, MdOutlineStar } from "react-icons/md";
import "./Competitive.css";

const LEETCODE_USERNAME = "Ankur160305";

const Competitive = () => {
  const [stats, setStats] = useState({
    leetcode: null,
    gfg: null,
    naukri: null,
    loading: true,
  });

  useEffect(() => {
    async function fetchStats() {
      try {
        const [lcRes, gfgRes, nRes] = await Promise.all([
          fetch("/api/leetcode"),
          fetch("/api/gfg"),
          fetch("/api/naukri"),
        ]);

        // Parse responses with error handling
        const lcData = lcRes.ok ? await lcRes.json() : null;
        const gfgData = gfgRes.ok ? await gfgRes.json() : null;
        const nData = nRes.ok ? await nRes.json() : null;

        setStats({
          leetcode: lcData,
          gfg: gfgData,
          naukri: nData,
          loading: false,
        });
      } catch (err) {
        console.error("Fetch error:", err);
        setStats({
          leetcode: null,
          gfg: null,
          naukri: null,
          loading: false,
        });
      }
    }
    fetchStats();
  }, []);

  if (stats.loading) {
    return (
      <div className="loader-container">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          className="glass-spinner"
        />
      </div>
    );
  }

  return (
    <div className="competitive-container" id="skills">
      <div className="mesh-gradient"></div>

      <header className="comp-header">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="title-container"
        >
          <h2 className="main-title">
            <span className="title-gradient">Competitive</span>
            <span className="title-outline"> Stats</span>
          </h2>
          <div className="title-decorator">
            <span className="line side-left"></span>
            <span className="dot"></span>
            <span className="line side-right"></span>
          </div>
        </motion.div>
      </header>

      <div className="comp-grid">
        {/* LeetCode Card */}
        {stats.leetcode?.submitStats?.acSubmissionNum && (
          <PlatformCard
            title="LeetCode"
            icon={<SiLeetcode />}
            color="#FFA116" /* Original Orange */
            link={`https://leetcode.com/${LEETCODE_USERNAME}`}
          >
            {stats.leetcode.submitStats.acSubmissionNum
              .filter((item) => item.difficulty !== "All")
              .map((item) => (
                <div className="stat-pill" key={item.difficulty}>
                  <span
                    className={`status-dot ${item.difficulty.toLowerCase()}`}
                  ></span>
                  <span className="diff-label">{item.difficulty}</span>
                  <span className="diff-count">{item.count}</span>
                </div>
              ))}
          </PlatformCard>
        )}

        {/* GFG Card */}
        {stats.gfg && (
          <PlatformCard
            title="GeeksforGeeks"
            icon={<SiGeeksforgeeks />}
            color="#2F8D46"
            link="https://www.geeksforgeeks.org/profile/ankurcr7"
          >
            <div className="stat-pill">
              <span className="status-dot easy"></span>
              <span className="diff-label">Easy</span>
              <span className="diff-count">{
                (stats.gfg.solvedStats?.basic || 0) + (stats.gfg.solvedStats?.easy || 0)
              }</span>
            </div>
            <div className="stat-pill">
              <span className="status-dot medium"></span>
              <span className="diff-label">Medium</span>
              <span className="diff-count">{stats.gfg.solvedStats?.medium || 0}</span>
            </div>
            <div className="stat-pill">
              <span className="status-dot hard"></span>
              <span className="diff-label">Hard</span>
              <span className="diff-count">{stats.gfg.solvedStats?.hard || 0}</span>
            </div>
          </PlatformCard>
        )}

        {/* Naukri Code360 Card */}
        {stats.naukri && (
          <PlatformCard
            title="Code360"
            icon={<SiCodingninjas />}
            color="#FF5252"
            link="https://www.naukri.com/code360/profile/Ankurcrs"
          >
            <div className="stat-pill">
              <span className="status-dot easy"></span>
              <span className="diff-label">Easy</span>
              <span className="diff-count">{
                stats.naukri.dsa_domain_data?.problem_count_data?.difficulty_data?.find(d => d.level === "Easy")?.count || 0
              }</span>
            </div>
            <div className="stat-pill">
              <span className="status-dot medium"></span>
              <span className="diff-label">Medium</span>
              <span className="diff-count">{
                stats.naukri.dsa_domain_data?.problem_count_data?.difficulty_data?.find(d => d.level === "Moderate")?.count || 0
              }</span>
            </div>
            <div className="stat-pill">
              <span className="status-dot hard"></span>
              <span className="diff-label">Hard</span>
              <span className="diff-count">{
                stats.naukri.dsa_domain_data?.problem_count_data?.difficulty_data?.find(d => d.level === "Hard")?.count || 0
              }</span>
            </div>
          </PlatformCard>
        )}
      </div>
    </div>
  );
};

const PlatformCard = ({ title, icon, color, link, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{
        y: -15,
        rotateX: 8,
        rotateY: -8,
        boxShadow: `0 25px 50px -12px rgba(0,0,0,0.5), 0 0 20px 0px ${color}22`,
      }}
      style={{
        "--accent": color,
        transformStyle: "preserve-3d",
      }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className="glass-card"
    >
      <div className="glass-shine"></div>

      <div
        style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }}
      >
        <div className="card-top">
          <div className="icon-wrapper">{icon}</div>
          <h3>{title}</h3>
        </div>

        <div className="card-body">{children}</div>

        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.05,
            backgroundColor: "var(--accent)",
            color: "#000",
          }}
          whileTap={{ scale: 0.95 }}
          className="glass-btn"
        >
          Visit Profile
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Competitive;
