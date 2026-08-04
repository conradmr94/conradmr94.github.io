const publishReady = process.env.PUBLISH_READY === 'YES';

if (!publishReady) {
  console.error('\nPublishing is intentionally blocked.');
  console.error('Complete PRELAUNCH_CHECKLIST.md, then run deploy with PUBLISH_READY=YES.\n');
  process.exit(1);
}

console.log('Explicit publish confirmation received.');
