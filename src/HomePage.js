// src/HomePage.js
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaCamera, FaFileAlt, FaUniversity, FaAward, FaBriefcase, FaCogs, FaPenNib } from 'react-icons/fa';
import { MdSecurity } from 'react-icons/md';
import './HomePage.css';

const HomePage = ({ name }) => {
  return (
    <div className="resume-container">
      {/* Header Section */}
      <header className="resume-header">
        <h1>Hello, {name}!</h1>
        <p>Welcome to my portfolio. Scroll down to learn more!</p>
      </header>

      {/* About Me Section */}
      <section className="resume-section">
        <h2>About Me</h2>
        <div className="card">
          <p>
            I'm Matt, and I'm a Principal Computer Systems Architect at Northrop Grumman and U.S. Marine Corps veteran.
            I earned a Bachelor of Science in Computer Science from the University of Michigan in 2024,
            and I'm currently pursuing a Master of Science in Computer Science from Georgia Tech.
          </p>

          <p>
            I am a published machine learning researcher proficient in a variety of coding languages and frameworks including C, C++, Python, Django, and Shell and PowerShell scripting.
            I am also experienced with Cisco routing and switching technology and security operations.
          </p>

          <p>
            Outside of work, I enjoy exploring, jogging, backpacking, reading everything worth reading, and trying my own hand at writing.
          </p>
        </div>
      </section>


      {/* Coding Section */}
      <section className="resume-section">
        <h2><FaCode /> Coding</h2>
        <div className="card">
          <ul className="experience-list">
            <li>
              <strong>
                <a href="https://github.com/conradmr94/orderbook.git" target="_blank" rel="noopener noreferrer">
                  Order Book
                </a>
              </strong>: A lightweight C++ implementation of an order book system supporting basic order types and matching logic. 
              Designed to simulate core trading mechanisms like placing orders, cancelling them, and executing trades through matching buy/sell pairs. 
              <br />
              <strong>Technologies:</strong> C++17
            </li> 
            <li>
              <strong>
                <a href="https://github.com/conradmr94/TradingEngineServer.git" target="_blank" rel="noopener noreferrer">
                  Trading Engine Server
                </a>
              </strong>: A skeleton of a stock trading engine server, written in C# using .NET. 
              <br />
              <strong>Technologies:</strong> C#, .NET
            </li>

            <li>
              <strong>
                <a href="https://github.com/conradmr94/portfolio_calculator.git" target="_blank" rel="noopener noreferrer">
                  Stock Portfolio Calculator
                </a>
              </strong>: A calculator app to generate buy lists and portfolio distributions given a target purchase volume.
              This project is in progress.
              <br />
              <strong>Technologies:</strong> Python, Flask, Pandas, HTML, CSS
            </li>

            <li>
              <strong>Example-Based Machine Learning Explanations</strong>: A method for explaining the behavior of convolutional neural networks (CNN)
              by showing users examples of inputs and outputs. This project is ongoing and pending submission/approval by the University of Michigan Innovation Partnership.
              <br />
              <strong>Technologies:</strong> Python, Keras, Django, HTML, CSS
            </li>

            <li>
              <strong>My Portfolio</strong>: That's where you are right now! Of course, this site is a living document. 
              <br />
              <strong>Technologies:</strong> React, Node.js, JavaScript, HTML, CSS
            </li>

          </ul>
        </div>
      </section>


      {/* Writing Section */}
      <section className="resume-section">
        <h2><FaPenNib /> Writing</h2>
        <div className="card">
        <h3>Published Research</h3>
        <p>
          <em>Interpretability Gone Bad: The Role of Bounded Rationality in How Practitioners Understand Machine Learning</em><br />
          Harmanpreet Kaur, <strong>Matthew R. Conrad</strong>, Davis Rule, Cliff Lampe, and Eric Gilbert<br />
          Proc. ACM Hum.-Comput. Interact., April 2024<br />
          <a href="/Interpretability_Gone_Bad.pdf" target="_blank" rel="noopener noreferrer">
            DOI: 10.1145/3637354 (View PDF)
          </a>
        </p>
        </div>
      </section>

      {/* Resume Section - Now Includes Full Content */}
      <section className="resume-section">
        <h2><FaFileAlt /> Resume</h2>

        {/* Resume Download Link */}
        <p>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            📄 My Resume (PDF)
          </a>
        </p>

        {/* Education */}
        <div className="card">
          <h3><FaUniversity /> Education</h3>
          <p><strong>Master of Science in Computer Science (Machine Learning)</strong> - Georgia Institute of Technology (In Progress)</p>
          <p><strong>Bachelor of Science in Computer Science</strong> - University of Michigan (May 2024) | GPA: 3.6</p>
        </div>

        {/* Certifications */}
        <div className="card">
          <h3><MdSecurity /> Certifications</h3>
          <p>CompTIA Security+ (expires 9/2025)</p>
          <p>CompTIA A+ (expires 9/2025)</p>
        </div>

        {/* Experience */}
        <div className="card">
          <h3><FaBriefcase /> Work Experience</h3>
          
          <h4>Principal Computer Systems Architect - Northrop Grumman</h4>
          <p>Los Angeles, CA | 7/2024 - Present</p>
          <ul className="experience-list">
            <li>Completed upgrades on 100+ Cisco enterprise switches and routers with less than 1ms downtime.</li>
            <li>Managed data center infrastructure using multicast, vPC, HSRP, and Layer 3 switching and routing.</li>
            <li>Configured and deployed VoIP servers and 120+ client devices across multiple locations.</li>
            <li>Developed cybersecurity hardening policies for Linux and Windows devices.</li>
            <li>Installed, configured, and deployed Red Hat Enterprise Linux servers.</li>
          </ul>

          <h4>Research Assistant - University of Michigan</h4>
          <p>Ann Arbor, MI | 10/2021 - Present</p>
          <ul className="experience-list">
            <li>Principal investigator of project focusing on example-based machine learning explanations in the Computational Human-Computer Interaction Lab.</li>
            <li>Developed question-generation algorithms to explain machine learning models using Python.</li>
            <li>Second author of <a href="/Interpretability_Gone_Bad.pdf" target="_blank" rel="noopener noreferrer"><em>Interpretability Gone Bad: The Role of Bounded Rationality in How Practitioners Understand Machine Learning</em></a>.</li>
            <li>Conducted behavioral economic analysis on ML interpretability through interviews and survey experiments.</li>
            <li>Performed dataset analysis using Generative Additive Models (GAMs) and SHAP explanations.</li>
          </ul>

          <h4>Computer Consultant - University of Michigan</h4>
          <p>Ann Arbor, MI | 9/2021 - 8/2022</p>
          <ul className="experience-list">
            <li>Provided on-site technical support for PC, Mac, and mobile device users.</li>
            <li>Ensured compliance with university regulations regarding network security.</li>
            <li>Conducted employee onboarding training for 30+ faculty and staff.</li>
          </ul>

          <h4>Information Technology Analyst - Seifert Technologies Inc.</h4>
          <p>Massillon, OH | 2/2021 - 6/2021</p>
          <ul className="experience-list">
            <li>Developed Microsoft Power BI solutions for inventory, shipping, and billing analytics.</li>
            <li>Provided remote and on-site technical support for Microsoft Office and Power BI.</li>
            <li>Performed server and data backup maintenance and verification.</li>
          </ul>

          <h4>Active Duty Marine - U.S. Marine Corps</h4>
          <p>Various Locations | 8/2012 - 1/2021</p>
          <ul className="experience-list">
            <li>Planned and executed the first Marine Corps supply chain risk assessment for the F-35 Lightning II.</li>
            <li>Led counterintelligence operations across multiple global deployments.</li>
            <li>Provided intelligence support for Marine Aircraft Group 12 in Japan.</li>
            <li>Implemented secure network architectures across five remote operations centers.</li>
            <li>Trained 750+ Marines and sailors on cybersecurity and counterintelligence principles.</li>
          </ul>
        </div>

        {/* Skills */}
        <div className="card">
          <h3><FaCogs /> Skills</h3>

          <h4>Programming & Software Development</h4>
          <div className="skills-flexbox">
            <span className="skill-item">C</span>
            <span className="skill-item">C++</span>
            <span className="skill-item">Python</span>
            <span className="skill-item">Django</span>
            <span className="skill-item">Object-Oriented Programming</span>
            <span className="skill-item">Algorithm Design</span>
            <span className="skill-item">Computer Vision</span>
            <span className="skill-item">Statistical Methods</span>
          </div>

          <h4>Networking & System Administration</h4>
          <div className="skills-flexbox">
            <span className="skill-item">VoIP Management</span>
            <span className="skill-item">Routing</span>
            <span className="skill-item">Switching</span>
            <span className="skill-item">Cyber Security</span>
            <span className="skill-item">Linux</span>
            <span className="skill-item">Red Hat Enterprise Linux</span>
            <span className="skill-item">Server Management</span>
          </div>

          <h4>Leadership & Communication</h4>
          <div className="skills-flexbox">
            <span className="skill-item">Leadership</span>
            <span className="skill-item">Project Management</span>
            <span className="skill-item">Team Building</span>
            <span className="skill-item">Presentation</span>
            <span className="skill-item">Communication</span>
            <span className="skill-item">Problem Solving</span>
          </div>

          <h4>Intelligence & Security</h4>
          <div className="skills-flexbox">
            <span className="skill-item">Counterintelligence / Human Intelligence Operations</span>
            <span className="skill-item">Intelligence Operations Planning</span>
            <span className="skill-item">Intelligence Reporting</span>
          </div>
        </div>


        {/* Awards */}
        <div className="card">
          <h3><FaAward /> Awards</h3>
          <p>Navy and Marine Corps Commendation Medal (2020)</p>
          <p>Navy and Marine Corps Achievement Medal (2016, 2018)</p>
        </div>

        {/* Security Clearance */}
        <div className="card">
          <h3><MdSecurity /> Security Clearance</h3>
          <p>TS/SCI with CI-scope polygraph</p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <a href="https://github.com/conradmr94" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://www.linkedin.com/in/matthew-r-conrad" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="mailto:matthew.r.conrad1@gmail.com">
          <FaEnvelope size={30} />
        </a>
      </footer>
    </div>
  );
};

export default HomePage;
