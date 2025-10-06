import { ModuleFederationConfig } from '@nx/module-federation';
import { workspaceRoot } from '@nx/devkit';

const deps = require(`${workspaceRoot}/package.json`).dependencies;

const config: ModuleFederationConfig = {
  name: 'shell',
  /**
   * To use a remote that does not exist in your current Nx Workspace
   * You can use the tuple-syntax to define your remote
   *
   * remotes: [['my-external-remote', 'https://nx-angular-remote.netlify.app']]
   *
   * You _may_ need to add a `remotes.d.ts` file to your `src/` folder declaring the external remote for tsc, with the
   * following content:
   *
   * declare module 'my-external-remote';
   *
   */
  // remotes: [
  //   ['homepage', 'homepage@http://localhost:4203/remoteEntry.js'],
  //   ['header', 'header@http://localhost:4202/remoteEntry.js'],
  //   ['footer', 'footer@http://localhost:4201/remoteEntry.js'],
  // ],
  remotes: ['homepage', 'header', 'footer', 'homepage'],
  // remotes: ['header', 'footer', 'sideCart', 'homepage'],
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
