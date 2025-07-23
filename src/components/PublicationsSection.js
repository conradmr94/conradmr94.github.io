import React from 'react';

const publications = [
  {
    title: 'Interpretability Gone Bad: The Role of Bounded Rationality in How Practitioners Understand Machine Learning',
    authors: 'Harmanpreet Kaur, Matthew R. Conrad, et al.',
    venue: 'Proc. ACM HCI',
    year: 2024,
    link: 'https://doi.org/10.1145/3637354',
    badge: '📝',
  },
  // Add more publications here as needed
];

const PublicationsSection = () => (
  <section aria-labelledby="publications-title" style={{width: '100%', padding: '3rem 0', background: 'var(--panel-alt)', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <h2 id="publications-title" style={{color: 'var(--accent)', fontSize: '2rem', marginBottom: '2rem'}}>Publications</h2>
    <ul style={{listStyle: 'none', padding: 0, margin: 0, width: '100%', maxWidth: 700}}>
      {publications.map(pub => (
        <li key={pub.title} style={{background: 'var(--panel)', borderRadius: 12, boxShadow: '0 2px 8px rgba(94,124,60,0.08)', marginBottom: 24, padding: '1.2rem 1.5rem', display: 'flex', alignItems: 'flex-start', gap: 18}}>
          <span aria-hidden="true" style={{fontSize: 32, marginRight: 10, marginTop: 2}}>{pub.badge}</span>
          <div>
            <div style={{fontWeight: 600, color: 'var(--text-main)', fontSize: '1.15rem', marginBottom: 4}}>{pub.title}</div>
            <div style={{color: 'var(--text-muted)', fontSize: '1.01rem', marginBottom: 2}}>{pub.authors}</div>
            <div style={{color: 'var(--accent2)', fontSize: '0.98rem', marginBottom: 6}}>{pub.venue}, {pub.year}</div>
            <a href={pub.link} target="_blank" rel="noopener noreferrer" style={{color: 'var(--accent)', fontWeight: 600, textDecoration: 'underline', fontSize: '1.01rem'}}>View Paper</a>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default PublicationsSection; 