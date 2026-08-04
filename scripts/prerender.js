const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');
const React = require('react');
const { renderToString } = require('react-dom/server');

process.env.NODE_ENV = 'production';

const originalJavaScriptLoader = require.extensions['.js'];

require.extensions['.js'] = (module, filename) => {
  if (filename.includes(`${path.sep}node_modules${path.sep}`)) {
    originalJavaScriptLoader(module, filename);
    return;
  }

  const result = babel.transformFileSync(filename, {
    presets: [[require.resolve('babel-preset-react-app'), { runtime: 'automatic' }]],
    babelrc: false,
    configFile: false,
    sourceMaps: false,
  });

  module._compile(result.code, filename);
};

require.extensions['.css'] = module => {
  module.exports = {};
};

const App = require('../src/App').default;
const markup = renderToString(React.createElement(App));
const buildIndexPath = path.join(__dirname, '..', 'build', 'index.html');
const buildIndex = fs.readFileSync(buildIndexPath, 'utf8');
const root = '<div id="root"></div>';

if (!buildIndex.includes(root)) {
  throw new Error('Could not find the empty React root in build/index.html.');
}

fs.writeFileSync(
  buildIndexPath,
  buildIndex.replace(root, `<div id="root">${markup}</div>`),
);

console.log('Prerendered the portfolio content into build/index.html.');
