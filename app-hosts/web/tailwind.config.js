const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');

const { semantic } = require('../../libs/ds-tokens');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    // `../../libs/ui/src/**/*.{js,jsx,ts,tsx}`,
    // `../../libs/features/**/*.{js,jsx,ts,tsx}`,
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
