import React from 'react';

const experience = [
  {
    dates: 'Nov 2025 to present · Herndon, VA',
    role: 'Software Development Engineer II',
    organization: 'Amazon Web Services',
    narrative: 'At AWS, I work on how a new service reaches developers: the SDKs they use, the secure path that delivers them, and the release infrastructure behind it. The role sits at the intersection of product engineering, distributed systems, and customer experience.',
  },
  {
    dates: 'May 2023 to Oct 2025 · Los Angeles, CA',
    role: 'Principal Computer Systems Architect',
    organization: 'Northrop Grumman',
    narrative: 'At Northrop Grumman, I was responsible for the architecture and reliability of a large, low-latency datacenter environment supporting real-time work. Much of the job was translating hard availability, performance, and security constraints into systems that stayed predictable under pressure.',
  },
  {
    dates: 'Oct 2021 to Oct 2025 · Ann Arbor, MI',
    role: 'Machine Learning Researcher',
    organization: 'University of Michigan',
    narrative: 'My research at Michigan focused on how people understand, and misunderstand, machine-learning explanations. I worked across model analysis, study design, and human-subject research, contributing to the published work shown below.',
  },
  {
    dates: 'Jun 2025 to Aug 2025 · New York, NY (Remote)',
    role: 'Software Engineer, Web3 Trading Infrastructure',
    organization: 'Concord Systems Corp.',
    narrative: 'At Concord, I worked on the backend of institutional trading workflows, connecting transaction signing, approvals, and order execution. It was a short engagement centered on making security-critical financial operations dependable.',
  },
  {
    dates: 'Aug 2012 to Jan 2021 · Various locations',
    role: 'Counterintelligence Agent · Team Chief · Cyber Network Operator',
    organization: 'United States Marine Corps',
    narrative: 'My Marine Corps work combined counterintelligence, cyber operations, and team leadership. It taught me to approach technical systems through the people, threats, and operational constraints around them, not just the implementation.',
  },
];

const TimelineSection = () => (
  <section id="experience" className="content-section" aria-labelledby="experience-title">
    <div className="section-rule-heading">
      <h2 id="experience-title">Experience</h2><span />
    </div>
    <ol className="experience-list">
      {experience.map((item, index) => (
        <li key={`${item.role}-${item.organization}`}>
          <span className="experience-number">0{index + 1}</span>
          <div className="experience-role">
            <p>{item.dates}</p>
            <h3>{item.role}</h3>
            <span>{item.organization}</span>
          </div>
          <div className="experience-copy">
            <p>{item.narrative}</p>
          </div>
        </li>
      ))}
    </ol>
  </section>
);

export default TimelineSection;
