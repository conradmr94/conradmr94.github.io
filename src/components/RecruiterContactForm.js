import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const initial = { name: '', email: '', message: '' };

const RecruiterContactForm = () => {
  const [fields, setFields] = useState(initial);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = e => {
    setFields({ ...fields, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!fields.name || !fields.email || !fields.message) {
      setError('Please fill out all fields.');
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setFields(initial);
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section aria-labelledby="recruiter-contact-title" style={{width: '100%', padding: '3rem 0', background: 'var(--panel-alt)', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h2 id="recruiter-contact-title" style={{color: 'var(--accent)', fontSize: '2rem', marginBottom: '2rem'}}>Contact Me</h2>
      <form onSubmit={handleSubmit} style={{background: 'var(--panel)', borderRadius: 12, boxShadow: '0 2px 8px rgba(94,124,60,0.08)', padding: '2rem 2.5rem', maxWidth: 420, width: '100%', display: 'flex', flexDirection: 'column', gap: 18}} aria-label="Recruiter contact form">
        <label htmlFor="name" style={{color: 'var(--text-main)', fontWeight: 600}}>Name</label>
        <input id="name" name="name" type="text" autoComplete="name" value={fields.name} onChange={handleChange} style={{padding: '0.7em', borderRadius: 6, border: '1px solid var(--muted)', background: 'var(--panel-alt)', color: 'var(--text-main)', fontSize: '1.05rem'}} required />
        <label htmlFor="email" style={{color: 'var(--text-main)', fontWeight: 600}}>Email</label>
        <input id="email" name="email" type="email" autoComplete="email" value={fields.email} onChange={handleChange} style={{padding: '0.7em', borderRadius: 6, border: '1px solid var(--muted)', background: 'var(--panel-alt)', color: 'var(--text-main)', fontSize: '1.05rem'}} required />
        <label htmlFor="message" style={{color: 'var(--text-main)', fontWeight: 600}}>Message</label>
        <textarea id="message" name="message" rows={5} value={fields.message} onChange={handleChange} style={{padding: '0.7em', borderRadius: 6, border: '1px solid var(--muted)', background: 'var(--panel-alt)', color: 'var(--text-main)', fontSize: '1.05rem', resize: 'vertical'}} required />
        <button type="submit" style={{background: 'var(--accent)', color: 'var(--panel)', border: 'none', borderRadius: 6, padding: '0.8em 0', fontWeight: 700, fontSize: '1.1rem', cursor: 'pointer', marginTop: 8}}>Send</button>
        <AnimatePresence>
          {error && (
            <motion.div initial={{opacity: 0, y: 10}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: 10}} style={{color: '#e74c3c', fontWeight: 600, marginTop: 4}}>{error}</motion.div>
          )}
          {submitted && (
            <motion.div initial={{opacity: 0, scale: 0.8}} animate={{opacity: 1, scale: 1}} exit={{opacity: 0, scale: 0.8}} style={{color: 'var(--accent)', fontWeight: 700, marginTop: 8, fontSize: '1.15rem', textAlign: 'center'}}>
              Thank you! Your message has been sent.
            </motion.div>
          )}
        </AnimatePresence>
      </form>
      <div style={{marginTop: 18, color: 'var(--text-muted)', fontSize: '1.05rem', textAlign: 'center', maxWidth: 420}}>
        <span className="sr-only">All fields are required. No data is stored; this is a demo form.</span>
        <span aria-hidden="true">For recruiter inquiries only. All fields required.</span>
      </div>
    </section>
  );
};

export default RecruiterContactForm; 