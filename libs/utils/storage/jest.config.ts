module.exports = {
  displayName: '@pokemon-pet-shop/util-storage',
  preset: '../../../jest.coverage-preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nx/react/plugins/jest',
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nx/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: 'test-output/jest/coverage',
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
    // typeof globalThis !== 'undefined' false branch is unreachable in Node.js
    './src/lib/create-storage.ts': {
      branches: 75,
      functions: 100,
      lines: 100,
      statements: 90,
    },
  },
};
