import React from 'react';
import '@fontsource/cormorant-garamond/400.css';
import '@fontsource/cormorant-garamond/600.css';
import '@fontsource/lora/400.css';
import '@fontsource/lora/600.css';
import '@fontsource/ibm-plex-mono/400.css';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import TimelineSection from './components/TimelineSection';
import PublicationsSection from './components/PublicationsSection';
import CertsAwardsSection from './components/CertsAwardsSection';
import ContactSection from './components/ContactSection';
import './App.css';

const navigation = [
  ['Work', '#work'],
  ['Experience', '#experience'],
  ['Research', '#research'],
  ['Contact', '#contact'],
];

function App() {
  return (
    <div className="portfolio-site">
      <a className="skip-link" href="#main-content">Skip to main content</a>

      <header className="site-header">
        <div className="site-header-inner">
          <a className="wordmark" href="#top">Matthew R. Conrad</a>
          <nav aria-label="Primary navigation">
            {navigation.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <a className="header-resume" href="/resume.pdf" target="_blank" rel="noopener noreferrer">Résumé</a>
        </div>
      </header>

      <main id="main-content">
        <HeroSection />
        <ProjectsSection />

        <figure className="photo-interlude">
          <img
            src="/assets/portfolio-lake.jpg"
            alt="A quiet mountain lake framed by trees and granite"
            width="1400"
            height="1050"
            loading="lazy"
            decoding="async"
          />
          <figcaption>Outside the work: long trails, high country, and places without notifications.</figcaption>
        </figure>

        <TimelineSection />
        <PublicationsSection />
        <CertsAwardsSection />
      </main>

      <ContactSection />

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} Matthew R. Conrad</span>
        <span>Herndon, Virginia</span>
      </footer>
    </div>
  );
}

export default App;
