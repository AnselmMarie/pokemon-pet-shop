const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const { workspaceRoot } = require('@nx/devkit');

const { sharedTheme } = require(`${workspaceRoot}/tailwind.shared`);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: sharedTheme,
  plugins: [],
};
