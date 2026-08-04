import React from 'react';

const projects = [
  {
    number: '01',
    title: 'Deva',
    href: 'https://devseccode.com',
    stack: 'Python · FastAPI · OpenGrep · Docker · GCP',
    summary: 'A local-first AI security platform with one scanning engine serving IDE, CLI, CI, extension, and MCP clients.',
    contribution: 'I architected and built the shared scanning engine, authenticated API, cross-platform release pipeline, and cloud control plane.',
    details: [
      'Static analysis, dependency review, compliance mapping, and assisted remediation in a unified workflow.',
      'Secure cross-platform delivery with integrity checks and rollback support.',
      'Runs with managed, local, or user-provided models.',
    ],
    image: '/assets/project-deva.jpg',
    imageWidth: 1400,
    imageHeight: 722,
    imageAlt: 'Deva security dashboard visualizing scan findings by severity and file.',
    size: 'compact',
  },
  {
    number: '02',
    title: 'Zenblis',
    href: 'https://zenblis.com',
    stack: 'TypeScript · React · Firebase · Stripe · Google Maps',
    summary: 'A two-sided senior-living marketplace paired with a multi-tenant operating platform for community teams.',
    contribution: 'I built and launched the marketplace and operator platform, including discovery, CRM, subscriptions, publishing, and administrative systems.',
    details: [
      'Marketplace discovery, lead capture, CRM, email, analytics, listings, subscriptions, and scheduling.',
      'Role-aware administration and publishing tools with structured SEO and automated quality coverage.',
    ],
    image: '/assets/project-zenblis.jpg',
    imageWidth: 1400,
    imageHeight: 510,
    imageAlt: 'Zenblis homepage with senior-living search and a map of community results.',
    size: 'wide',
  },
  {
    number: '03',
    title: 'Yammoing',
    href: 'https://yammoing.com',
    appStoreHref: 'https://apps.apple.com/us/app/yammoing/id6757343455',
    stack: 'Swift · SwiftUI · TypeScript · Firebase · Gemini',
    summary: 'A full-stack iOS health and nutrition platform combining barcode scanning, multimodal AI, HealthKit, and subscriptions.',
    contribution: 'I architected and shipped the iOS application and supporting cloud services, including HealthKit, subscriptions, authentication, and multi-provider data integrations.',
    details: [
      'Barcode, label, and meal-photo analysis with nutrition and ingredient guidance.',
      'HealthKit integration, subscriptions, and privacy-conscious cloud synchronization.',
      'Resilient data access across multiple food, venue, and AI services.',
    ],
    image: '/assets/project-yammoing.jpg',
    imageWidth: 1400,
    imageHeight: 695,
    imageAlt: 'Yammoing product page showing personalized health scoring on an iPhone.',
    size: 'full',
  },
];

const otherProjects = [
  {
    title: 'motive.',
    stack: 'Swift · AlarmKit · WidgetKit',
    summary: 'A motivational iOS app with scheduled prompts, Live Activities, and a fully on-device experience.',
    href: 'https://apps.apple.com/us/app/motive/id6761436873',
  },
  {
    title: 'BreatheMindful',
    stack: 'Swift · HealthKit · AVFoundation',
    summary: 'Guided breathing, focus sessions, sleep tracking, and a spatial ambient-sound mixer.',
    href: 'https://apps.apple.com/eg/app/breathemindful/id6757343368',
  },
  {
    title: 'Lovocado',
    stack: 'Swift · Firebase · HealthKit',
    summary: 'A private couples app for shared plans, memories, messaging, and wellness data, designed to work offline first.',
    href: 'https://apps.apple.com/us/app/lovocado/id6757644902',
  },
];

const ProjectsSection = () => (
  <section id="work" className="content-section work-section" aria-labelledby="work-title">
    <div className="section-rule-heading">
      <h2 id="work-title">Selected work</h2><span />
    </div>

    <div className="featured-projects">
      {projects.map(project => (
        <article key={project.title} className={`project project-${project.size}`}>
          <div className="project-kicker">
            <span>{project.number}</span><span>{project.stack}</span>
          </div>
          <h3>{project.title}</h3>
          <p className="project-summary">{project.summary}</p>
          <p className="project-contribution">{project.contribution}</p>
          <ul className="project-details">
            {project.details.map(detail => <li key={detail}>{detail}</li>)}
          </ul>
          <div className={`project-evidence project-evidence-${project.title.toLowerCase()}`}>
            <img
              src={project.image}
              alt={project.imageAlt}
              width={project.imageWidth}
              height={project.imageHeight}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="project-actions">
            <a className="project-link" href={project.href} target="_blank" rel="noopener noreferrer">
              Visit {project.title} <span aria-hidden="true">↗</span>
            </a>
            {project.appStoreHref && (
              <a className="project-link" href={project.appStoreHref} target="_blank" rel="noopener noreferrer">
                {project.title} on the App Store <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        </article>
      ))}
    </div>

    <article className="more-projects">
      <div className="more-projects-intro">
        <span className="project-kicker">04 · Additional releases</span>
        <h3>More iOS work</h3>
        <p>Three additional apps designed, built, and released end to end.</p>
      </div>
      <ul className="more-project-list">
        {otherProjects.map(project => (
          <li key={project.title}>
            <div>
              <div className="more-project-heading">
                <h4>{project.title}</h4>
                <span>{project.stack}</span>
              </div>
              <p>{project.summary}</p>
            </div>
            <a href={project.href} target="_blank" rel="noopener noreferrer">View on the App Store <span aria-hidden="true">↗</span></a>
          </li>
        ))}
      </ul>
    </article>
  </section>
);

export default ProjectsSection;
