import { ModuleFederationConfig } from '@nx/module-federation';
const { sharedMappings } = require('../../module-federation.shared');

const config: ModuleFederationConfig = {
  name: 'web',
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
  remotes: ['homepage', 'webHeader', 'footer', 'not-found'],
  shared: sharedMappings,
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
