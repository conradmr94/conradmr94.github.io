import React from 'react';

const ContactSection = () => (
  <section
    id="contact"
    className="contact"
    aria-labelledby="contact-title"
    style={{ '--contact-photo': 'url(/assets/contact-mountains.jpg)' }}
  >
    <div>
      <p className="contact-kicker">Contact</p>
      <h2 id="contact-title">Tell me about the software you’re trying to build.</h2>
    </div>
    <div className="contact-copy">
      <p>
        For project questions, research conversations, or just comparing notes,
        email is the most reliable way to reach me.
      </p>
      <a className="contact-email" href="mailto:matthew.r.conrad1@gmail.com">matthew.r.conrad1@gmail.com <span aria-hidden="true">↗</span></a>
      <div className="contact-links">
        <a href="https://www.linkedin.com/in/matthew-r-conrad" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/conradmr94" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Résumé</a>
      </div>
    </div>
  </section>
);

export default ContactSection;
