import { SharedLibraryConfig } from '@nx/module-federation';
import { workspaceRoot } from '@nx/devkit';

const deps = require(`${workspaceRoot}/package.json`).dependencies;

export const sharedMappings = (libraryName: string, defaultConfig: SharedLibraryConfig) => {
  if (['react', 'react-dom'].includes(libraryName)) {
    return {
      ...defaultConfig,
      singleton: true,
      strictVersion: false,
      requiredVersion: deps[libraryName],
    };
  }

  if (libraryName === 'jotai' || libraryName === 'jotai/utils') {
    return {
      ...defaultConfig,
      singleton: true,
      strictVersion: false,
      requiredVersion: false,
    };
  }

  if (libraryName === 'react-native') {
    return {
      ...defaultConfig,
      singleton: true,
      import: 'react-native-web',
      shareKey: 'react-native',
      shareScope: 'default',
      strictVersion: false,
      requiredVersion: false,
      eager: true,
    };
  }

  return defaultConfig;
};
