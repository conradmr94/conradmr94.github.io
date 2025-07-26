// src/App.js
import React from 'react';
import '@fontsource/ibm-plex-mono';
import { ThemeProvider } from './components/ThemeContext';
import MathBackground from './components/MathBackground';
import HeroSection from './components/HeroSection';
import TradingGame from './components/TradingGame';
import ProjectsSection from './components/ProjectsSection';
import PublicationsSection from './components/PublicationsSection';
import CertsAwardsSection from './components/CertsAwardsSection';
import TimelineSection from './components/TimelineSection';
import WhyHireMeSection from './components/WhyHireMeSection';
import ContactSection from './components/ContactSection';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <div className="App">
          <ThemeToggle />
          <MathBackground />
          <HeroSection />
          <TradingGame />
          <ProjectsSection />
          <PublicationsSection />
          <TimelineSection />
          <CertsAwardsSection />
          <WhyHireMeSection />
          <ContactSection />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
