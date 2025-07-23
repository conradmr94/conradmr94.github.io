import React from 'react';

const sections = [
  { label: 'Projects', id: 'projects' },
  { label: 'Publications', id: 'publications-title' },
  { label: 'Experience', id: 'timeline-section' },
  { label: 'Certs & Awards', id: 'certs-awards-title' },
  { label: 'Why Hire Me?', id: 'why-hire-me-title' },
  { label: 'Contact', id: 'contact-section' },
];

const scrollToSection = id => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const HeroSection = () => (
  <section style={{position: 'relative', zIndex: 1, width: '100%', minHeight: '32vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '2.5rem', paddingBottom: '1.5rem'}}>
    <h1 style={{fontSize: '2.2rem', margin: 0, color: 'var(--text-main)'}}>Matthew R. Conrad</h1>
    <h2 style={{fontWeight: 400, fontSize: '1.15rem', color: 'var(--accent)', margin: '0.7rem 0 0.3rem'}}>Quantitative Developer & Machine Learning Engineer</h2>
    <p style={{maxWidth: 600, textAlign: 'center', color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '1.2rem'}}>
      Building robust, data-driven systems for finance, trading, and AI. Passionate about algorithms, statistics, and elegant code.
    </p>
    <div style={{display: 'flex', gap: '1rem', marginTop: 8, flexWrap: 'wrap', justifyContent: 'center'}}>
      {sections.map(sec => (
        <button
          key={sec.id}
          onClick={() => scrollToSection(sec.id)}
          style={{
            background: 'var(--accent)',
            color: 'var(--panel)',
            border: 'none',
            borderRadius: 8,
            padding: '0.6em 1.2em',
            fontSize: '1rem',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: '0 2px 8px rgba(94,124,60,0.08)',
            transition: 'background 0.2s',
          }}
          aria-label={`Jump to ${sec.label}`}
        >
          {sec.label}
        </button>
      ))}
    </div>
  </section>
);

export default HeroSection; 