// src/LandingPage.js
import React, { useState } from 'react';
import './LandingPage.css';

const LandingPage = ({ onSubmitName }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') {
      onSubmitName('friend');
    } else {
      onSubmitName(name);
    }
  };

  return (
    <div className="landing-page">
      <h1>Hi there!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nameInput">What should I call you?</label>
        <input
          type="text"
          id="nameInput"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name here!"
        />
        <button type="submit">Let's go!</button>
      </form>
    </div>
  );
};

export default LandingPage;
