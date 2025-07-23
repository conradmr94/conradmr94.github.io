import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const getTheme = () => {
  if (typeof document !== 'undefined') {
    return document.body.getAttribute('data-theme') || 'light';
  }
  return 'light';
};

const MathBackground = () => {
  const [theme, setTheme] = useState(getTheme());
  useEffect(() => {
    const observer = new MutationObserver(() => setTheme(getTheme()));
    observer.observe(document.body, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);
  const gridColor = theme === 'dark' ? 'rgba(200,200,200,0.07)' : '#e0e0e0';
  const symbolColor = theme === 'dark' ? 'rgba(255,255,255,0.13)' : '#b2b2b2';
  return (
    <svg style={{position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, pointerEvents: 'none'}} width="100%" height="100%">
      {/* Simple grid */}
      {[...Array(20)].map((_, i) => (
        <line key={i} x1={i*60} y1={0} x2={i*60} y2={window.innerHeight} stroke={gridColor} strokeWidth="1" />
      ))}
      {[...Array(12)].map((_, i) => (
        <line key={i+100} x1={0} y1={i*80} x2={window.innerWidth} y2={i*80} stroke={gridColor} strokeWidth="1" />
      ))}
      {/* Animated math symbols */}
      <motion.text x="20%" y="30%" fontSize="48" fill={symbolColor} initial={{opacity: 0, y: -30}} animate={{opacity: 0.5, y: 0}} transition={{duration: 1.5, delay: 0.2}}>
        ∑
      </motion.text>
      <motion.text x="70%" y="60%" fontSize="40" fill={symbolColor} initial={{opacity: 0, y: 30}} animate={{opacity: 0.5, y: 0}} transition={{duration: 1.5, delay: 0.5}}>
        π
      </motion.text>
      <motion.text x="40%" y="80%" fontSize="36" fill={symbolColor} initial={{opacity: 0, x: -30}} animate={{opacity: 0.5, x: 0}} transition={{duration: 1.5, delay: 0.8}}>
        ∫
      </motion.text>
    </svg>
  );
};

export default MathBackground; 