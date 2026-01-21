const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { workspaceRoot } = require('@nx/devkit');

const { sharedTheme } = require(`${workspaceRoot}/tailwind.shared`);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    // `../../libs/ui/src/**/*.{js,jsx,ts,tsx}`,
    // `../../libs/features/**/*.{js,jsx,ts,tsx}`,
    ...createGlobPatternsForDependencies(__dirname),
  ],
  presets: [require('nativewind/preset')],
  theme: sharedTheme,
  plugins: [],
};
