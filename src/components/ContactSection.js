import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const links = [
  { icon: <FaEnvelope />, label: 'Email', href: 'mailto:mconrad35@gatech.edu', external: true },
  { icon: <FaLinkedin />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/matthew-r-conrad', external: true },
  { icon: <FaGithub />, label: 'GitHub', href: 'https://github.com/conradmr94', external: true },
  { icon: <FaFileAlt />, label: 'Resume', href: '/resume.pdf', external: true },
];

const ContactSection = () => (
  <section id="contact-section" style={{width: '100%', padding: '3rem 0 2rem 0', background: 'var(--panel-alt)', position: 'relative', zIndex: 1, textAlign: 'center'}}>
    <h2 style={{color: 'var(--accent)', fontSize: '2rem', marginBottom: '1.5rem'}}>Contact</h2>
    <motion.div
      initial={{opacity: 0, y: 40}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.5}}
      transition={{duration: 0.7}}
      style={{display: 'flex', justifyContent: 'center', gap: '2.5rem', marginBottom: '1.5rem'}}
    >
      {links.map(link => (
        <a
          key={link.label}
          href={link.href}
          target={link.external ? '_blank' : undefined}
          rel={link.external ? 'noopener noreferrer' : undefined}
          style={{color: 'var(--accent2)', fontSize: '2.2rem', transition: 'color 0.2s'}}
        >
          {link.icon}
        </a>
      ))}
    </motion.div>
    <div style={{color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: 500, margin: '0 auto'}}>
      Interested in collaborating or hiring for a quant/dev role? <br />
      Let’s connect!
    </div>
  </section>
);

export default ContactSection; 