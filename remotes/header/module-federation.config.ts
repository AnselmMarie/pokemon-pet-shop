import { ModuleFederationConfig } from '@nx/module-federation';
import { workspaceRoot } from '@nx/devkit';

const deps = require(`${workspaceRoot}/package.json`).dependencies;

const config: ModuleFederationConfig = {
  name: 'header',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
  shared: (libraryName: string, defaultConfig: any) => {
    if (['react', 'react-dom'].includes(libraryName)) {
      return {
        singleton: true,
        strictVersion: false,
        requiredVersion: deps[libraryName],
      };
    }

    if (libraryName === 'react-native') {
      return {
        singleton: true,
        import: 'react-native-web', // use the alias
        shareKey: 'react-native', // ensure both sides share under same key
        shareScope: 'default',
        strictVersion: false,
        requiredVersion: false,
        eager: true, // optional: ensures only one copy is loaded early
      };
    }

    return defaultConfig;
  },
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
