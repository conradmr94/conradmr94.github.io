import React from 'react';

const AccessibilityStatement = () => (
  <footer style={{width: '100%', background: 'var(--panel-alt)', color: 'var(--text-muted)', textAlign: 'center', padding: '2rem 0 1.2rem 0', fontSize: '1.05rem', marginTop: 32}}>
    <div style={{maxWidth: 700, margin: '0 auto'}}>
      <strong>Accessibility Statement:</strong> This site is designed to be accessible to all users. All interactive elements are keyboard navigable, color contrast is strong in both light and dark mode, and ARIA labels and roles are used where appropriate. Screen readers are supported. If you encounter any accessibility issues, please <a href="mailto:mconrad35@gatech.edu" style={{color: 'var(--accent)', textDecoration: 'underline'}}>let me know</a>.
    </div>
  </footer>
);

export default AccessibilityStatement; 