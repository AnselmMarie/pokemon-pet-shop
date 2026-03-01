const basePreset = require('./jest.preset.js');

module.exports = {
  ...basePreset,
  collectCoverageFrom: ['src/lib/**/*.ts', '!src/**/*.spec.ts', '!src/**/index.ts'],
  coverageReporters: ['text', 'lcov', 'json-summary'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};
