import React from 'react';
import { useTheme } from './ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      onClick={toggleTheme}
      style={{
        position: 'fixed',
        top: 18,
        right: 18,
        zIndex: 100,
        background: theme === 'light' ? '#e5e1d8' : '#2d2d2d',
        color: theme === 'light' ? '#7c5e3c' : '#ffe082',
        border: 'none',
        borderRadius: '50%',
        width: 44,
        height: 44,
        fontSize: 22,
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        cursor: 'pointer',
        transition: 'background 0.2s, color 0.2s',
      }}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle; 