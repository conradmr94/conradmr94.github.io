import React from 'react';
import { motion } from 'framer-motion';

const points = [
  'Deep technical expertise in quantitative finance, ML, and distributed systems',
  'Proven track record building robust, production-grade trading and analytics platforms',
  'Strong research background with peer-reviewed publications',
  'Security-first mindset: experience with secure system design and incident response',
  'Clear communicator and effective collaborator across technical and business teams',
  'Veteran leader with a focus on reliability, performance, and impact',
];

const WhyHireMeSection = () => {
  const theme = document.body.getAttribute('data-theme') || 'light';
  return (
    <section aria-labelledby="why-hire-me-title" style={{width: '100%', padding: '3rem 0', background: 'var(--panel-alt)', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h2 id="why-hire-me-title" style={{color: 'var(--accent)', fontSize: '2rem', marginBottom: '2rem'}}>Why Hire Me?</h2>
      <ul style={{listStyle: 'none', padding: 0, margin: 0, maxWidth: 700, width: '100%'}}>
        {points.map((point, i) => (
          <motion.li
            key={point + theme}
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: false, amount: 0.2}}
            transition={{duration: 0.5, delay: i * 0.1}}
            style={{background: 'var(--panel)', borderRadius: 10, marginBottom: 18, padding: '1.1rem 1.3rem', color: 'var(--text-main)', fontSize: '1.13rem', boxShadow: '0 2px 8px rgba(94,124,60,0.08)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 12}}
          >
            <span aria-hidden="true" style={{fontSize: 22, color: 'var(--accent)'}}>✔️</span>
            {point}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default WhyHireMeSection; 