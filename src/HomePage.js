// src/HomePage.js
import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="portfolio-root">
      {/* Header / Hero */}
      <header className="hero">
        <h1>Matthew R. Conrad</h1>
        <p className="hero-tagline">Software Engineer & Researcher | Finance, ML, Security</p>
        <div className="hero-links">
          <a href="mailto:mconrad35@gatech.edu" title="Email"><FaEnvelope size={24} /></a>
          <a href="https://www.linkedin.com/in/matthew-r-conrad" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedin size={24} /></a>
          <a href="https://github.com/conradmr94" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub size={24} /></a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" title="Resume"><FaFileAlt size={24} /></a>
        </div>
      </header>

      {/* Featured Project */}
      <section className="featured-project">
        <h2>Featured Project: Machine Learning-Driven Trading Simulator</h2>
        <div className="project-card">
          <p><strong>Technologies:</strong> Python, Ensemble Learners, Pandas, NumPy</p>
          <ul>
            <li>Engineered a portfolio backtester and strategy learner to simulate equity trading with realistic constraints (impact, commission).</li>
            <li>Implemented Q-Learning and ensemble random tree learners to model adaptive trading policies.</li>
            <li>Outperformed benchmark with cumulative return 70% vs. 0.01 and Sharpe ratio 1.61 vs. 0.25.</li>
            <li>Conducted experiments across three market periods to evaluate strategy robustness and cost sensitivity.</li>
            <li>Analyzed the relationship between market impact and trade frequency.</li>
          </ul>
        </div>
      </section>

      {/* Other Projects */}
      <section className="projects">
        <h2>Other Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>Stock Price Movement Prediction</h3>
            <p><strong>Technologies:</strong> SVM, KRR, PCA</p>
            <ul>
              <li>Built classification models using SVMs and KRR, achieving F1-score of 0.80 on out-of-sample data.</li>
              <li>Applied unsupervised learning (K-Means) to cluster equities into 30+ distinct behavioral segments.</li>
              <li>Conducted principal component analysis (PCA), variance inflation factor (VIF), and Augmented Dickey-Fuller (ADF) testing.</li>
            </ul>
          </div>
          <div className="project-card">
            <h3>Market Simulator</h3>
            <p><strong>Technologies:</strong> Python, Pandas, NumPy</p>
            <ul>
              <li>Built a realistic market simulator to model equity portfolio performance over time from executed trade orders.</li>
              <li>Implemented logic for cash management, transaction costs, and market impact to evaluate strategy robustness.</li>
              <li>Developed vectorized pipeline for computing portfolio value, daily returns, Sharpe ratio, and cumulative return.</li>
            </ul>
          </div>
          <div className="project-card">
            <h3>Q-Learning/Dyna-Q Agent</h3>
            <p><strong>Technologies:</strong> Python, Reinforcement Learning, Q-Learning, Dyna-Q</p>
            <ul>
              <li>Implemented a tabular Q-learning agent with support for Dyna-Q planning and ε-greedy action selection.</li>
              <li>Designed reinforcement learning update rules using Bellman equations to estimate state–action values.</li>
              <li>Used as a learning component in a broader ML4T trading strategy system to improve long-term returns.</li>
            </ul>
          </div>
          <div className="project-card">
            <h3>Martingale Strategy Simulator</h3>
            <p><strong>Technologies:</strong> Python, NumPy, Matplotlib</p>
            <ul>
              <li>Implemented Monte Carlo simulations of the Martingale betting strategy under various constraints (bankroll limits, timeouts).</li>
              <li>Analyzed risk, variance, and success rates across 1,000+ episodes using statistical metrics and graphical summaries.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-groups">
          <div><strong>Languages:</strong> Python, C++, JavaScript, SQL, Bash</div>
          <div><strong>Frameworks & Tools:</strong> PyTorch, TensorFlow, Flask, React, Docker, Fireblocks, Postgres, Pandas, NumPy, Scikit-learn, Power BI</div>
          <div><strong>Techniques:</strong> Reinforcement Learning, Ensemble Methods, Time Series Analysis, Explainability (SHAP/GAM), Q-Learning, Dyna-Q, Clustering, Statistical Modeling, Kernel Methods</div>
          <div><strong>Infrastructure:</strong> AWS Bedrock, Docker, Hybrid Networking (VoIP, L2/L3), Linux/Windows Server Management, Secure System Design</div>
          <div><strong>Security:</strong> Cyber Threat Analysis, Multi-Party Computation (MPC), Smart Contract Custody, Incident Response, Zero-Downtime Patching</div>
        </div>
      </section>

      {/* Experience */}
      <section className="experience">
        <h2>Experience</h2>
        <div className="exp-list">
          <div className="exp-card">
            <h3>Software Engineer, Web3 Trading Infrastructure</h3>
            <div className="exp-meta">Concord Systems Corp. | New York, NY, Remote | Jun 2025 – Present</div>
            <ul>
              <li>Engineered Fireblocks MPC-based transaction approval into production OTC trading systems.</li>
              <li>Designed flexible trade execution logic supporting both atomic and non-atomic trade flows.</li>
              <li>Built and deployed backend services for transaction signing, order routing, and database migrations.</li>
              <li>Strengthened security and consistency across trading flows through multi-party coordination protocols.</li>
              <li>Skills: Distributed Systems, Smart Contract Custody, Python, Web3, Postgres</li>
            </ul>
          </div>
          <div className="exp-card">
            <h3>Principal Computer Systems Architect</h3>
            <div className="exp-meta">Northrop Grumman | Los Angeles, CA | Apr 2023 – Present</div>
            <ul>
              <li>Designed and deployed scalable Layer 2/3 networking systems supporting real-time data processing and sub-millisecond failover.</li>
              <li>Built and automated inventory systems (MySQL, MS Access) tracking over $1M in infrastructure assets.</li>
              <li>Engineered and secured hybrid compute environments (Linux, Windows) to support containerized applications and data pipelines.</li>
              <li>Deployed and monitored VoIP infrastructure enabling secure communication between distributed systems.</li>
              <li>Led patching, compliance hardening, and zero-downtime update cycles across 500+ nodes in mission-critical networks.</li>
              <li>Collaborated cross-functionally to debug and optimize system throughput, aligning networking and software stack performance.</li>
            </ul>
          </div>
          <div className="exp-card">
            <h3>Machine Learning Researcher</h3>
            <div className="exp-meta">University of Michigan | Ann Arbor, MI | Oct 2021 – Present</div>
            <ul>
              <li>Conducted deep learning research applying CNNs using Keras to study model trust, interpretability, and failure modes.</li>
              <li>Co-authored CSCW 2024 and CHI 2026 papers on cognitive biases and contrastive explanations in AI model evaluation.</li>
              <li>Developed and evaluated a quiz-based active learning framework to improve user understanding of AI limitations via contrastive example selection.</li>
              <li>Designed end-to-end pipelines for automated selection of model failure cases using statistical similarity (SIFT, clustering) and human-meaningful contrastive pairs.</li>
              <li>Applied SHAP, GAMs, and regression analysis to connect model predictions with behavioral outcomes in user studies (N=400+).</li>
              <li>Led experimental design, IRB approval, and full deployment of a cross-sectional study measuring AI literacy outcomes.</li>
            </ul>
          </div>
          <div className="exp-card">
            <h3>Information Technology Analyst</h3>
            <div className="exp-meta">Seifert Technologies Inc. | Massillon, OH | Feb 2021 – Jun 2021</div>
            <ul>
              <li>Built Power BI dashboards (DAX) for analytics across logistics, billing, and production cycles.</li>
              <li>Supported ERP systems, Microsoft 365, and remote IT infrastructure in a client-facing support role.</li>
              <li>Automated backup verification and streamlined invoicing workflows via QuickBooks APIs.</li>
            </ul>
          </div>
          <div className="exp-card">
            <h3>Counterintelligence Agent, Team Chief, Cyber Network Operator</h3>
            <div className="exp-meta">United States Marine Corps | Various Locations | Aug 2012 – Jan 2021</div>
            <ul>
              <li>Directed cyber threat assessments and incident response protocols for sensitive operations, including the F-35 program.</li>
              <li>Conducted HUMINT and SIGINT operations; contributed to secure information systems across Indo-Pacific deployments.</li>
              <li>Designed remote operational networks, integrating encryption and secure routing for joint-force communication.</li>
              <li>Led 40+ briefings on information security and network defense; trained 750+ personnel in threat awareness.</li>
              <li>Managed SIPRNet services for 1,500+ users, resolving infrastructure and access control issues in high-security zones.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="education-certs">
        <h2>Education & Certifications</h2>
        <div className="edu-list">
          <div className="edu-card">
            <h3>Georgia Institute of Technology</h3>
            <div className="edu-meta">Master of Science in Computer Science (Machine Learning) | In Progress | GPA: 4.0/4.0</div>
          </div>
          <div className="edu-card">
            <h3>University of Michigan</h3>
            <div className="edu-meta">Bachelor of Science in Computer Science | Aug 2021 – May 2024 | GPA: 3.6/4.0</div>
          </div>
        </div>
        <div className="certs-list">
          <div className="cert-card">CompTIA Security+ (exp. 9/2028)</div>
          <div className="cert-card">CompTIA A+ (exp. 9/2028)</div>
        </div>
      </section>

      {/* Publications */}
      <section className="publications">
        <h2>Selected Publications</h2>
        <div className="pub-card">
          Harmanpreet Kaur, <strong>Matthew R. Conrad</strong>, et al. 2024. "Interpretability Gone Bad: The Role of Bounded Rationality in How Practitioners Understand Machine Learning." <a href="https://doi.org/10.1145/3637354" target="_blank" rel="noopener noreferrer">Proc. ACM HCI, 2024</a>.
        </div>
      </section>

      {/* Other / Awards / Clearance */}
      <section className="other">
        <h2>Other</h2>
        <div className="other-list">
          <div className="other-card"><strong>Security Clearance:</strong> TS/SCI with CI-scope polygraph</div>
          <div className="other-card"><strong>Awards:</strong> Navy & Marine Corps Commendation Medal (2020), Navy & Marine Corps Achievement Medal (2016, 2018)</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <span>© {new Date().getFullYear()} Matthew R. Conrad</span>
      </footer>
    </div>
  );
};

export default HomePage;
