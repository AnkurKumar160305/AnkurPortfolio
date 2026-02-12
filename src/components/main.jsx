import React from 'react'
import './main.css'

const main = () => {
  return (
    <div className='main' id="home">
      {/* LEFT CONTENT */}
      <div className="left-main">
        <h1 className='main-heading'>Hello, I'm Ankur</h1>
        <p className='main-para'>Full Stack Developer</p>
        <p className='main-desc'>
            I am a passionate full-stack developer with expertise in creating dynamic and responsive web applications. Skilled in both front-end and back-end technologies, I thrive on transforming ideas into functional digital experiences.
        </p>

        <div className="button-group">
            <a href="#resume" className='main-btn'>
                <button className='resume'>Resume</button>
            </a>
            <a href="#contact" className='contact-me'>
                <button className='contact-me-btn'>Contact Me</button>
            </a>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="right-main">
          <img className='final-img' src="./src/assets/Adobefile.png" alt="Ankur"/>
      </div>
    </div>

  )
}

export default main
