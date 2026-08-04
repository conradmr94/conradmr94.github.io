import React from 'react';

const HeroSection = () => (
  <section
    id="top"
    className="masthead"
    aria-labelledby="masthead-title"
    style={{ '--masthead-photo': 'url(/assets/masthead-mountains.jpg)' }}
  >
    <div className="masthead-identity">
      <p className="masthead-label">Portfolio / 2026</p>
      <h1 id="masthead-title">Matthew R. Conrad</h1>
      <p>Software Development Engineer II at Amazon Web Services</p>
    </div>

    <div className="masthead-intro">
      <p>
        I design and implement secure, low-latency software across cloud
        infrastructure, developer tooling, and consumer products.
      </p>
    </div>

    <dl className="masthead-details">
      <div>
        <dt>Based in</dt>
        <dd>Herndon, Virginia</dd>
      </div>
      <div>
        <dt>Background</dt>
        <dd>AWS · Northrop Grumman · U.S. Marine Corps</dd>
      </div>
      <div>
        <dt>Education</dt>
        <dd>Georgia Tech, MSCS · University of Michigan, BSCS</dd>
      </div>
      <div>
        <dt>Clearance</dt>
        <dd>Active U.S. security clearance</dd>
      </div>
    </dl>
  </section>
);

export default HeroSection;
