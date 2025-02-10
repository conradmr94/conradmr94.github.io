// src/App.js
import React, { useState } from 'react';
import LandingPage from './LandingPage';
import HomePage from './HomePage';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNameSubmit = (name) => {
    setName(name);
    setIsSubmitted(true);
  };

  return (
    <div className="App">
      {!isSubmitted ? (
        <LandingPage onSubmitName={handleNameSubmit} />
      ) : (
        <HomePage name={name} />
      )}
    </div>
  );
}

export default App;
