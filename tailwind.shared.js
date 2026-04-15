const { workspaceRoot } = require('@nx/devkit');

const { semantic } = require(`${workspaceRoot}/libs/ui/ds-tokens/src`);

/** @type {import('tailwindcss').Config['theme']} */
const sharedTheme = {
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
};

module.exports = { sharedTheme, workspaceRoot };
