const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

const themeConfig = require('../../../libs/ds-tokens/src/build/semantic.tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    ...themeConfig,
  },
  plugins: [],
};
