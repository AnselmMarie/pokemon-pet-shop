const { withNxMetro } = require('@nx/expo');
const { getDefaultConfig } = require('@expo/metro-config');
const { mergeConfig } = require('metro-config');
const { withNativeWind } = require('nativewind/metro');
const { workspaceRoot } = require('@nx/devkit');
const path = require('path');

const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

const projectRoot = __dirname;

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const customConfig = {
  cacheVersion: '@pokemon-pet-shop/mobile',
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: assetExts.filter((ext) => ext !== 'svg'),
    sourceExts: [...sourceExts, 'cjs', 'mjs', 'svg'],
  },
  watchFolders: [workspaceRoot],
};

module.exports = async () => {
  const defaultConfig = await getDefaultConfig(projectRoot, { isCSSEnabled: true }); // Use await here

  // Merge default config with any custom configuration you might have
  const mergedConfig = mergeConfig(defaultConfig, customConfig || {});

  // Apply withNxMetro to the merged config
  const nxConfig = withNxMetro(mergedConfig, {
    // your Nx specific options here, e.g.
    debug: false,
    extensions: [],
    watchFolders: [workspaceRoot],
  });

  nxConfig.resolver.nodeModulesPaths = [
    path.resolve(projectRoot, 'node_modules'),
    path.resolve(workspaceRoot, 'node_modules'),
  ];

  // This is important for monorepos to ensure proper module resolution
  nxConfig.projectRoot = projectRoot;

  // If you are using other wrappers like withNativeWind, apply them next
  const finalConfig = withNativeWind(nxConfig, {
    input: './src/global.css',
  });

  return finalConfig;
};
