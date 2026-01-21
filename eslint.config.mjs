import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist', '**/test-output'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: [
            '^.*/eslint(\\.base)?\\.config\\.[cm]?[jt]s$',
            '^.*/rspack(\\.config|\\.config\\.prod)\\.[cm]?[jt]s$',
            '^.*/rspack-tsconfig-paths\\.[cm]?js$',
          ],
          depConstraints: [
            // Primitives can only depend on other primitives or util libs
            {
              sourceTag: 'type:primitives',
              onlyDependOnLibsWithTags: ['type:primitives', 'type:util'],
            },
            // Components can depend on primitives, other components, and util libs
            {
              sourceTag: 'type:components',
              onlyDependOnLibsWithTags: [
                'type:primitives',
                'type:components',
                'type:util',
                'type:types',
              ],
            },
            // Features can depend on any UI library
            {
              sourceTag: 'type:feature',
              onlyDependOnLibsWithTags: [
                'type:primitives',
                'type:components',
                'type:util',
                'type:types',
                'type:feature',
                'type:service',
              ],
            },
            // Default rule for untagged projects
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    // Override or add rules here
    rules: {},
  },
];
