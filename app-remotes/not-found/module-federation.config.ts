import { ModuleFederationConfig } from '@nx/module-federation';
const { sharedMappings } = require('../../module-federation.shared');

const config: ModuleFederationConfig = {
  name: 'not-found',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
  shared: sharedMappings,
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
