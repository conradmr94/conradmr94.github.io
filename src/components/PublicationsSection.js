import React from 'react';

const PublicationsSection = () => (
  <section id="research" className="content-section" aria-labelledby="research-title">
    <div className="section-rule-heading">
      <h2 id="research-title">Research</h2><span />
    </div>
    <article className="research-card">
      <div>
        <span className="research-kicker">Peer-reviewed · Proc. ACM HCI, 2024</span>
        <h3>Interpretability Gone Bad: The Role of Bounded Rationality in How Practitioners Understand Machine Learning</h3>
        <p>Harmanpreet Kaur, <strong>Matthew R. Conrad</strong>, et al.</p>
        <div className="research-actions">
          <a className="button button-light" href="https://doi.org/10.1145/3637354" target="_blank" rel="noopener noreferrer">Read the paper</a>
          <a href="/Interpretability_Gone_Bad.pdf" target="_blank" rel="noopener noreferrer">Download paper (PDF)</a>
        </div>
      </div>
      <p>
        The paper examines how cognitive shortcuts shape the way practitioners
        interpret model explanations, and how explanation tools can reinforce
        beliefs that are already wrong.
      </p>
    </article>
  </section>
);

export default PublicationsSection;
