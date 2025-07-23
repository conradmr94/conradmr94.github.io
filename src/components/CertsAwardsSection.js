import React from 'react';

const certs = [
  { name: 'CompTIA Security+', expires: '9/2028', badge: '🛡️' },
  { name: 'CompTIA A+', expires: '9/2028', badge: '💻' },
];

const awards = [
  { name: 'Navy & Marine Corps Commendation Medal', year: 2020, badge: '🏅' },
  { name: 'Navy & Marine Corps Achievement Medal', year: 2016, badge: '🏅' },
  { name: 'Navy & Marine Corps Achievement Medal', year: 2018, badge: '🏅' },
];

const CertsAwardsSection = () => (
  <section aria-labelledby="certs-awards-title" style={{width: '100%', padding: '3rem 0', background: 'var(--panel-alt)', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <h2 id="certs-awards-title" style={{color: 'var(--accent)', fontSize: '2rem', marginBottom: '2rem'}}>Certifications & Awards</h2>
    <div style={{display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', marginBottom: '2.5rem'}}>
      {certs.map(cert => (
        <div key={cert.name} style={{background: 'var(--panel)', borderRadius: 12, boxShadow: '0 2px 8px rgba(94,124,60,0.08)', padding: '1.2rem 1.5rem', minWidth: 220, display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.2s', fontWeight: 600}}>
          <span aria-hidden="true" style={{fontSize: 36, marginBottom: 8}}>{cert.badge}</span>
          <span style={{color: 'var(--text-main)', fontSize: '1.08rem', marginBottom: 4}}>{cert.name}</span>
          <span style={{color: 'var(--text-muted)', fontSize: '0.98rem'}}>Exp. {cert.expires}</span>
        </div>
      ))}
    </div>
    <div style={{display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center'}}>
      {awards.map((award, i) => (
        <div key={award.name + award.year + i} style={{background: 'var(--panel)', borderRadius: 12, boxShadow: '0 2px 8px rgba(94,124,60,0.08)', padding: '1.2rem 1.5rem', minWidth: 220, display: 'flex', flexDirection: 'column', alignItems: 'center', transition: 'transform 0.2s', fontWeight: 600}}>
          <span aria-hidden="true" style={{fontSize: 36, marginBottom: 8}}>{award.badge}</span>
          <span style={{color: 'var(--text-main)', fontSize: '1.08rem', marginBottom: 4}}>{award.name}</span>
          <span style={{color: 'var(--text-muted)', fontSize: '0.98rem'}}>Year: {award.year}</span>
        </div>
      ))}
    </div>
  </section>
);

export default CertsAwardsSection; 