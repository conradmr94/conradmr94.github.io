import React from 'react';

const credentials = [
  ['Graduate', 'Georgia Institute of Technology', 'MS Computer Science, machine learning (in progress)'],
  ['Undergraduate', 'University of Michigan', 'BS Computer Science, 2024'],
  ['Certifications', 'CompTIA Security+ · A+', 'Both active through September 2028'],
  ['Service', 'United States Marine Corps', 'Commendation Medal, 2020 · Achievement Medal, 2016 and 2018'],
];

const CertsAwardsSection = () => (
  <section className="content-section credentials" aria-labelledby="credentials-title">
    <div className="section-rule-heading">
      <h2 id="credentials-title">Education &amp; credentials</h2><span />
    </div>
    <div className="credential-grid">
      {credentials.map(([label, title, detail]) => (
        <article key={title}>
          <p>{label}</p><h3>{title}</h3><span>{detail}</span>
        </article>
      ))}
    </div>
  </section>
);

export default CertsAwardsSection;
