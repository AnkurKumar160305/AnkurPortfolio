import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import profileImg from "../assets/black3.png";

const Card = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const MY_EMAIL = "ankurthemewtwo@gmail.com";

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Replace these with your actual IDs from EmailJS Dashboard
    const SERVICE_ID = "service_rdcu5oq"; 
    const TEMPLATE_ID = "template_drkz709";
    const PUBLIC_KEY = "xgEAcKTkwbuhP5oRC";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setIsSending(false);
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to send message. Please check your EmailJS keys.");
        setIsSending(false);
      });
  };

  return (
    <div style={styles.wrapper} id="contact">
      <div style={styles.mainHeader}>
        <h1 style={styles.mainTitle}>GET IN TOUCH</h1>
        <div style={styles.underline}></div>
      </div>

      <div style={styles.container}>
        {/* Profile Card */}
        <div style={styles.cardWrapper} className="card">
          <div style={styles.glassEffect}>
            <a href={`mailto:${MY_EMAIL}`} style={styles.mailButton} className="mail-button">
              <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <rect width={20} height={16} x={2} y={4} rx={2} />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>

            <div style={styles.profilePic} className="profile-pic">
              <img src={profileImg} alt="Profile" style={styles.profileImage} />
            </div>

            <div style={styles.bottom} className="bottom">
              <div style={styles.content}>
                <span style={styles.name}>John Doe</span>
                <span style={styles.aboutMe}>
                  Full Stack Developer passionate about creating beautiful and functional web experiences.
                </span>
              </div>
              <div style={styles.bottomBottom}>
                <div style={styles.socialLinks}>
                  {/* Instagram */}
                  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 16 15.999" style={styles.socialIcon} className="social-icon">
                    <path d="M6-582H-2a4,4,0,0,1-4-4v-8a4,4,0,0,1,4-4H6a4,4,0,0,1,4,4v8A4,4,0,0,1,6-582ZM2-594a4,4,0,0,0-4,4,4,4,0,0,0,4,4,4,4,0,0,0,4-4A4.005,4.005,0,0,0,2-594Zm4.5-2a1,1,0,0,0-1,1,1,1,0,0,0,1,1,1,1,0,0,0,1-1A1,1,0,0,0,6.5-596ZM2-587.5A2.5,2.5,0,0,1-.5-590,2.5,2.5,0,0,1,2-592.5,2.5,2.5,0,0,1,4.5-590,2.5,2.5,0,0,1,2-587.5Z" transform="translate(6 598)" />
                  </svg>
                  {/* X (Twitter) */}
                  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 512 512" style={styles.socialIcon} className="social-icon">
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                  </svg>
                  {/* GitHub */}
                  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 496 512" style={styles.socialIcon} className="social-icon">
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" />
                  </svg>
                </div>
                <button onClick={() => (window.location.href = `mailto:${MY_EMAIL}`)} style={styles.contactButtonSmall} className="contact-button-small">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Box */}
        <div style={styles.formWrapper} className="contact-form">
          <div style={styles.glassEffectForm}>
            <div style={styles.formHeader}>
              <div style={styles.iconCircle}>
                <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <h2 style={styles.formTitle}>MESSAGE ME</h2>
              <p style={styles.formSubtitle}>I'll get back to you shortly</p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} style={styles.form}>
              <div style={styles.formGroup}>
                <label style={styles.label}>NAME</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required style={styles.input} className="form-input" placeholder="Your Name" />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>EMAIL</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required style={styles.input} className="form-input" placeholder="Email Address" />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.label}>MESSAGE</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows={3} style={{ ...styles.input, ...styles.textarea }} className="form-input" placeholder="How can I help?" />
              </div>

              <button type="submit" disabled={isSending} style={styles.submitButton} className="submit-button">
                {isSending ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600;700&display=swap');
        .card *, .contact-form * { font-family: 'Rajdhani', sans-serif; box-sizing: border-box; }
        
        /* HOVER EFFECT */
        .card:hover .bottom { top: 32% !important; }
        .card:hover .profile-pic { 
          width: 110px !important; 
          height: 110px !important; 
          top: 25px !important; 
          left: 25px !important; 
          border-radius: 50% !important; 
          border: 3px solid rgba(255,255,255,0.2) !important; 
        }

        .submit-button:hover:not(:disabled) { background: #f0f0f0 !important; transform: scale(1.02); }
        .submit-button:disabled { opacity: 0.6; cursor: not-allowed; }
        .form-input:focus { border-color: #ffffff !important; background: rgba(255, 255, 255, 0.1) !important; outline: none; }
        .social-icon:hover { fill: #fff; transform: translateY(-3px); cursor: pointer; }
        .social-icon { transition: all 0.3s ease; }
      `}</style>
    </div>
  );
};

const styles = {
  wrapper: { display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", background: "transparent", padding: "40px 20px" },
  mainHeader: { textAlign: "center", marginBottom: "40px" },
  mainTitle: { fontSize: "3rem", color: "white", fontWeight: "800", letterSpacing: "6px", margin: 0 },
  underline: { width: "60px", height: "4px", background: "white", margin: "10px auto" },
  container: { display: "flex", gap: "30px", alignItems: "stretch", maxWidth: "1100px", width: "100%", flexWrap: "wrap", justifyContent: "center" },
  cardWrapper: { width: "420px", minHeight: "600px", position: "relative" },
  formWrapper: { width: "420px", minHeight: "600px", display: "flex" },
  glassEffect: { width: "100%", height: "100%", background: "rgba(255, 255, 255, 0.05)", backdropFilter: "blur(12px)", borderRadius: "24px", border: "1px solid rgba(255, 255, 255, 0.1)", boxShadow: "0 15px 35px rgba(0,0,0,0.2)", display: "flex", flexDirection: "column", overflow: "hidden", position: "relative" },
  glassEffectForm: { width: "100%", background: "rgba(255, 255, 255, 0.05)", backdropFilter: "blur(12px)", borderRadius: "24px", border: "1px solid rgba(255, 255, 255, 0.1)", boxShadow: "0 15px 35px rgba(0,0,0,0.2)", display: "flex", flexDirection: "column", padding: "30px 0", justifyContent: "center" },
  mailButton: { position: "absolute", right: "20px", top: "20px", background: "rgba(255, 255, 255, 0.1)", padding: "10px", borderRadius: "50%", color: "white", zIndex: 10 },
  profilePic: { position: "absolute", width: "100%", height: "350px", top: 0, left: 0, zIndex: 1, transition: "all 0.5s ease-in-out", overflow: "hidden" },
  profileImage: { objectFit: "cover", width: "100%", height: "100%" },
  bottom: { position: "absolute", bottom: 0, left: 0, right: 0, background: "rgba(20, 20, 20, 0.5)", top: "58.5%", zIndex: 2, borderTop: "1px solid rgba(255, 255, 255, 0.1)", transition: "all 0.5s ease-in-out" },
  content: { padding: "25px" },
  name: { fontSize: "1.8rem", color: "white", fontWeight: "700", display: "block" },
  aboutMe: { fontSize: "1.1rem", color: "rgba(255, 255, 255, 0.7)", marginTop: "10px", lineHeight: "1.4" },
  bottomBottom: { position: "absolute", bottom: "25px", left: "25px", right: "25px", display: "flex", justifyContent: "space-between", alignItems: "center" },
  socialLinks: { display: "flex", gap: "15px" },
  socialIcon: { fill: "white" },
  contactButtonSmall: { background: "white", color: "#111", border: "none", borderRadius: "30px", padding: "8px 20px", fontWeight: "700", cursor: "pointer" },
  formHeader: { textAlign: "center", marginBottom: "20px" },
  iconCircle: { width: "50px", height: "50px", borderRadius: "50%", background: "rgba(255, 255, 255, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 10px" },
  formTitle: { fontSize: "1.6rem", color: "white", margin: 0, letterSpacing: "2px" },
  formSubtitle: { fontSize: "0.9rem", color: "rgba(255, 255, 255, 0.5)" },
  form: { display: "flex", flexDirection: "column", gap: "18px", padding: "0 35px" },
  formGroup: { display: "flex", flexDirection: "column", gap: "5px" },
  label: { fontSize: "0.75rem", color: "white", fontWeight: "700", letterSpacing: "1px" },
  input: { padding: "12px", border: "1px solid rgba(255, 255, 255, 0.1)", borderRadius: "10px", background: "rgba(255, 255, 255, 0.05)", color: "white", width: "100%", fontSize: "1rem" },
  textarea: { resize: "none", minHeight: "110px" },
  submitButton: { background: "#fff", color: "#000", border: "none", borderRadius: "10px", padding: "14px", fontWeight: "700", cursor: "pointer", transition: "0.3s" },
};

export default Card;