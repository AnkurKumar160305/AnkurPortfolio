import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      {/* Global CSS to hide the browser scrollbar */}
      <style>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        ::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        html {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }

        .footer-input:focus { border-color: #fff !important; outline: none; background: rgba(255,255,255,0.1) !important; }
        .footer-btn:hover { background: #f0f0f0 !important; color: #000 !important; transform: translateY(-2px); }
        .footer-link { transition: all 0.3s ease; text-decoration: none; color: rgba(255,255,255,0.6); display: inline-block; }
        .footer-link:hover { color: #fff !important; transform: translateX(5px); }
        .scroll-up:hover { color: #fff !important; letter-spacing: 2px; }
        
        footer * { font-family: 'Rajdhani', sans-serif; transition: all 0.3s ease; }
      `}</style>

      <div style={styles.container}>
        {/* Top Section */}
        <div style={styles.topSection}>
          <div style={styles.brandBox}>
            <h2 style={styles.logo}>
              ANKUR<span style={styles.dot}>.</span>
            </h2>
            <p style={styles.tagline}>
              Building digital experiences that merge art with functionality.
              Available for freelance and full-time opportunities.
            </p>
          </div>

          <div style={styles.newsletter}>
            <h4 style={styles.footerHeading}>STAY IN THE LOOP</h4>
            <div style={styles.inputGroup}>
              <input
                type="email"
                placeholder="Email Address"
                style={styles.input}
                className="footer-input"
              />
              <button style={styles.subscribeBtn} className="footer-btn">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        <div style={styles.divider}></div>

        {/* Middle Section */}
        <div style={styles.middleSection}>
          <div style={styles.linkColumn}>
            <h4 style={styles.footerHeading}>NAVIGATION</h4>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                <a href="#home" className="footer-link">
                  Home
                </a>
              </li>
              <li style={styles.listItem}>
                <a href="#projects" className="footer-link">
                  Projects
                </a>
              </li>
              <li style={styles.listItem}>
                <a href="#contact" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div style={styles.linkColumn}>
            <h4 style={styles.footerHeading}>SOCIAL</h4>
            <ul style={styles.list}>
              <li style={styles.listItem}>
                <a href="https://github.com/AnkurKumar160305" className="footer-link" target="_blank">
                  GitHub
                </a>
              </li>
              <li style={styles.listItem}>
                <a href="https://www.linkedin.com/in/ankur-kumar-833026284/" target="_blank" className="footer-link">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div style={styles.linkColumn}>
            <h4 style={styles.footerHeading}>LOCAL TIME</h4>
            <p style={styles.timeText}>
              India (IST) •{" "}
              {new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <p style={styles.status}>
              <span style={styles.onlineDot}></span> Open to Work
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div style={styles.bottomSection}>
          <p style={styles.copyright}>
            © {currentYear} ANKUR. ALL RIGHTS RESERVED.
          </p>
          <div
            className="scroll-up"
            style={styles.scrollUp}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            BACK TO TOP ↑
          </div>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    width: "100%",
    background: "rgba(255, 255, 255, 0.02)",
    backdropFilter: "blur(15px)",
    WebkitBackdropFilter: "blur(15px)",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    padding: "80px 0 40px 0",
    color: "white",
    marginTop: "50px",
  },
  container: { maxWidth: "1100px", margin: "0 auto", padding: "0 20px" },
  topSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
    gap: "40px",
    marginBottom: "60px",
  },
  brandBox: { maxWidth: "400px" },
  logo: {
    fontSize: "2.5rem",
    fontWeight: "800",
    letterSpacing: "4px",
    margin: "0 0 15px 0",
  },
  dot: { color: "#fff" },
  tagline: {
    fontSize: "1.1rem",
    color: "rgba(255,255,255,0.6)",
    lineHeight: "1.6",
  },
  newsletter: { width: "100%", maxWidth: "400px" },
  footerHeading: {
    fontSize: "0.8rem",
    letterSpacing: "3px",
    color: "rgba(255,255,255,0.4)",
    marginBottom: "20px",
    fontWeight: "700",
  },
  inputGroup: { display: "flex", gap: "10px" },
  input: {
    flex: 1,
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    padding: "12px 20px",
    borderRadius: "5px",
    color: "white",
  },
  subscribeBtn: {
    background: "white",
    color: "black",
    border: "none",
    padding: "0 25px",
    borderRadius: "5px",
    fontWeight: "700",
    cursor: "pointer",
  },
  divider: {
    height: "1px",
    background: "rgba(255,255,255,0.1)",
    marginBottom: "60px",
  },
  middleSection: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "40px",
    marginBottom: "80px",
  },
  list: { listStyle: "none", padding: 0, margin: 0 },
  listItem: { marginBottom: "12px" },
  timeText: { fontSize: "1.1rem", margin: "0 0 10px 0" },
  status: {
    color: "rgba(255,255,255,0.6)",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  onlineDot: {
    width: "8px",
    height: "8px",
    background: "#ff0000",
    borderRadius: "50%",
    boxShadow: "0 0 10px #ff0000",
  },
  bottomSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    fontSize: "0.8rem",
    color: "rgba(255,255,255,0.3)",
  },
  scrollUp: {
    cursor: "pointer",
    color: "rgba(255,255,255,0.6)",
    fontWeight: "700",
    letterSpacing: "1px",
  },
};

export default Footer;
