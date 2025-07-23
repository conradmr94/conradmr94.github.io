import React from 'react';
import { motion } from 'framer-motion';

const timeline = [
  { year: '2025–Present', title: 'Software Engineer, Web3 Trading Infrastructure', org: 'Concord Systems Corp.', desc: 'Engineered MPC-based transaction approval, backend services, and secure trading flows.' },
  { year: '2023–Present', title: 'Principal Computer Systems Architect', org: 'Northrop Grumman', desc: 'Designed scalable networking, automated inventory, and secured hybrid compute environments.' },
  { year: '2021–Present', title: 'Machine Learning Researcher', org: 'University of Michigan', desc: 'Deep learning research, published papers, and user studies on AI interpretability.' },
  { year: '2021–2024', title: 'B.S. Computer Science', org: 'University of Michigan', desc: 'GPA: 3.6/4.0' },
  { year: '2021', title: 'Information Technology Analyst', org: 'Seifert Technologies Inc.', desc: 'Built Power BI dashboards, supported ERP, and automated IT workflows.' },
  { year: '2012–2021', title: 'Counterintelligence Agent, Team Chief, Cyber Network Operator', org: 'US Marine Corps', desc: 'Directed cyber threat assessments, led briefings, and managed secure networks.' },
];

const TimelineSection = () => {
  const theme = document.body.getAttribute('data-theme') || 'light';
  return (
    <section id="timeline-section" style={{width: '100%', padding: '3rem 0', background: 'var(--panel-alt)', position: 'relative', zIndex: 1}}>
      <h2 style={{textAlign: 'center', color: 'var(--accent2)', fontSize: '2rem', marginBottom: '2.5rem'}}>Experience & Education</h2>
      <div style={{display: 'flex', overflowX: 'auto', gap: '2.5rem', padding: '1rem 2rem'}}>
        {timeline.map((item, idx) => (
          <motion.div
            key={item.title + theme}
            initial={{opacity: 0, y: 40}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: false, amount: 0.2}}
            transition={{duration: 0.6, delay: idx * 0.08}}
            style={{minWidth: 260, background: 'var(--panel)', borderRadius: 12, boxShadow: '0 2px 8px rgba(124,94,60,0.08)', padding: '1.2rem 1rem', flex: '0 0 260px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
            <div style={{fontWeight: 700, color: 'var(--accent)', fontSize: '1.1rem'}}>{item.year}</div>
            <div style={{fontWeight: 600, color: 'var(--text-main)', fontSize: '1.08rem', margin: '0.2rem 0'}}>{item.title}</div>
            <div style={{color: 'var(--text-muted)', fontSize: '1.02rem', marginBottom: 6}}>{item.org}</div>
            <div style={{color: 'var(--text-main)', fontSize: '0.98rem'}}>{item.desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TimelineSection; 