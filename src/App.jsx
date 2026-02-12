"use client";

import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/main.jsx";
import About from "./components/About.jsx";
import Competitive from "./components/Competitive.jsx";
import ScrollTracker from "./components/ScrollTracker";
import LiquidEther from "./components/LiquidEther";
import Card from "./components/Projectcard.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <ScrollTracker />

      {/* 🌊 Liquid Ether Background */}
      <div className="liquid-bg">
        <LiquidEther
          colors={["#FF4D4D", "#FF1A1A", "#FF9999"]} // Reddish palette
          mouseForce={20} // How strongly the fluid reacts to your cursor
          cursorSize={100} // Size of the "force" circle in the fluid
          resolution={0.5} // Fluid resolution (0.5 = medium)
          autoDemo={true} // Automatically animates if no cursor movement
          autoSpeed={0.5} // Speed of auto movement
          autoIntensity={2.2} // Strength of auto movement
          takeoverDuration={0.25} // Smooth transition duration for auto takeover
          autoResumeDelay={3000} // Delay before auto resumes
          autoRampDuration={0.6} // Smooth ramp-up of auto movement
        />
      </div>

      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Main />
              <About />
              <Competitive />
              <Card />
              <Education />
              <Contact />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
