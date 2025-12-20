const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

const { semantic } = require('../../libs/ds-tokens');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    ...semantic,
    colors: semantic.color.colors,
    borderColor: semantic.color.borderColor,
    backgroundColor: semantic.color.backgroundColor,
    spacing: semantic.size.spacing,
    borderRadius: semantic.size.borderRadius,
    fontSize: semantic.typography.fontSize,
    fontFamily: semantic.typography.fontFamily,
    fontWeight: semantic.typography.fontWeight,
    lineHeight: semantic.typography.lineHeight,
  },
  plugins: [],
};
