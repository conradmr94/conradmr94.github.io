// src/HomePage.js
import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <h1>Welcome to My Portfolio</h1>
        <p>Your one-stop hub to explore my work and projects</p>
        <a href="#about" className="btn">Learn More</a>
      </header>

      <section className="content" id="about">
        <h2>About Me</h2>
        <p>
          Hi, I'm Eunhyung! I'm a software engineer passionate about building
          innovative solutions using the latest technologies. Explore my projects and
          see what I've been working on.
        </p>
      </section>

      <footer className="footer">
        <a href="https://github.com/conradmr94" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/conradmr94/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:email@example.com">Contact Me</a>
      </footer>
    </div>
  );
};

export default HomePage;
