import { ModuleFederationConfig } from '@nx/module-federation';
const { sharedMappings } = require('../../module-federation.shared');

const config: ModuleFederationConfig = {
  name: 'header',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
  remotes: ['atom-theme', 'modal-side-cart'],
  shared: sharedMappings,
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
