const { peerDependencies } = require(`${process.cwd()}/package.json`);

const a11yOff = Object.keys(require('eslint-plugin-jsx-a11y').rules).reduce(
  (acc, rule) => ({ ...acc, [`jsx-a11y/${rule}`]: 'off' }),
  {},
);

module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  env: {
    browser: true,
  },
  plugins: ['import-helpers'],
  rules: {
    ...a11yOff,
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
    ],
    'import/no-dynamic-require': 'off',
    'import/no-cycle': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': ['error', peerDependencies ? { ignore: Object.keys(peerDependencies) } : {}],
    'import/prefer-default-export': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: ['/^react/', 'module', '/^~/', ['parent', 'sibling', 'index']],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
    'react/jsx-curly-newline': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'class-methods-use-this': 'off',
    'global-require': 'off',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'no-param-reassign': 'off',
    'spaced-comment': 'off',
    'no-extra-boolean-cast': 'off',
  },
};