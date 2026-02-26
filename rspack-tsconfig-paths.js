/**
 * Helper function to resolve TypeScript paths for Rspack
 * Reads tsconfig.base.json and converts path mappings to webpack-like aliases
 */
const fs = require('fs');
const path = require('path');

function getTsconfigPaths(tsconfigPath, baseDir) {
  try {
    // Read the tsconfig file
    const content = fs.readFileSync(tsconfigPath, 'utf-8');

    // Remove comments and parse JSON
    const jsonContent = content
      .replace(/\/\*[\s\S]*?\*\//g, '') // Remove block comments
      .replace(/\/\/.*/g, ''); // Remove line comments

    const tsconfig = JSON.parse(jsonContent);
    const paths = tsconfig.compilerOptions?.paths || {};
    const aliases = {};

    // Convert TypeScript paths to webpack aliases
    for (const [pattern, targets] of Object.entries(paths)) {
      if (targets.length > 0) {
        // Remove /* from pattern and get the actual alias
        const alias = pattern.replace(/\/\*$/, '');
        // Get the first target path
        const targetPath = targets[0].replace(/\/\*$/, '');
        // Resolve relative to the base directory
        const resolvedPath = path.resolve(baseDir, targetPath);
        aliases[alias] = resolvedPath;
      }
    }

    return aliases;
  } catch (error) {
    console.warn(`Failed to parse tsconfig paths: ${error.message}`);
    return {};
  }
}

/**
 * Conditionally wraps an Rspack config with Zephyr Cloud deployment.
 * Only activates when ZE_SECRET_TOKEN is set (e.g. in deploy CI or local with token).
 */
function maybeWithZephyr(config) {
  if (process.env.ZE_SECRET_TOKEN) {
    const { withZephyr } = require('zephyr-rspack-plugin');
    return withZephyr()(config);
  }
  return config;
}

module.exports = { getTsconfigPaths, maybeWithZephyr };
