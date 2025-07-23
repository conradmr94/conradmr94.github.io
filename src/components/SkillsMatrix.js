import React from 'react';

const skills = [
  { label: 'Programming', value: 5 },
  { label: 'ML/AI', value: 5 },
  { label: 'Finance', value: 4 },
  { label: 'Systems', value: 4 },
  { label: 'Security', value: 4 },
  { label: 'Communication', value: 5 },
];

const max = 5;
const size = 320;
const center = size / 2;
const radius = size / 2 - 40;
const angleStep = (2 * Math.PI) / skills.length;

function getPoint(idx, value) {
  const angle = idx * angleStep - Math.PI / 2;
  const r = (value / max) * radius;
  return [center + r * Math.cos(angle), center + r * Math.sin(angle)];
}

const SkillsMatrix = () => {
  const theme = document.body.getAttribute('data-theme') || 'light';
  const accent = getComputedStyle(document.body).getPropertyValue('--accent').trim() || '#5e7c3c';
  const panel = getComputedStyle(document.body).getPropertyValue('--panel').trim() || '#fff';
  const text = getComputedStyle(document.body).getPropertyValue('--text-main').trim() || '#2d2d2d';

  // Polygon points for the skill values
  const points = skills.map((s, i) => getPoint(i, s.value)).map(([x, y]) => `${x},${y}`).join(' ');

  return (
    <section aria-labelledby="skills-matrix-title" style={{width: '100%', padding: '3rem 0', background: 'var(--panel-alt)', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h2 id="skills-matrix-title" style={{color: 'var(--accent)', fontSize: '2rem', marginBottom: '2rem'}}>Skills Matrix</h2>
      <svg width={size} height={size} role="img" aria-label="Radar chart of skill proficiencies" style={{background: panel, borderRadius: 16, boxShadow: '0 2px 12px rgba(94,124,60,0.08)'}}>
        {/* Radar grid */}
        {[1,2,3,4,5].map(lvl => (
          <polygon
            key={lvl}
            points={skills.map((s, i) => getPoint(i, lvl)).map(([x, y]) => `${x},${y}`).join(' ')}
            fill="none"
            stroke={theme === 'dark' ? '#444' : '#ddd'}
            strokeWidth={lvl === 5 ? 2 : 1}
          />
        ))}
        {/* Axes */}
        {skills.map((s, i) => {
          const [x, y] = getPoint(i, max);
          return <line key={s.label} x1={center} y1={center} x2={x} y2={y} stroke={theme === 'dark' ? '#666' : '#bbb'} strokeWidth={1} />;
        })}
        {/* Skill polygon */}
        <polygon points={points} fill={accent} fillOpacity={0.18} stroke={accent} strokeWidth={3} />
        {/* Dots */}
        {skills.map((s, i) => {
          const [x, y] = getPoint(i, s.value);
          return <circle key={s.label} cx={x} cy={y} r={7} fill={accent} stroke={panel} strokeWidth={2} />;
        })}
        {/* Labels */}
        {skills.map((s, i) => {
          const [x, y] = getPoint(i, max + 0.3);
          return <text key={s.label} x={x} y={y} textAnchor="middle" fontSize={16} fill={text} dy={6} style={{fontWeight: 600}}>{s.label}</text>;
        })}
      </svg>
      <div style={{marginTop: 24, color: 'var(--text-muted)', fontSize: '1.05rem', textAlign: 'center', maxWidth: 500}}>
        <span className="sr-only">Programming, ML/AI, and Communication are rated 5/5. Finance, Systems, and Security are rated 4/5.</span>
        <span aria-hidden="true">Proficiency: 1 (center) to 5 (outer edge)</span>
      </div>
    </section>
  );
};

export default SkillsMatrix; 