module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript',
    'plugin:import/typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: '2020',
    sourceType: 'module',
    project: ['tsconfig.json'],
  },
  plugins: ['react', '@typescript-eslint', 'import', 'prettier'],
  rules: {
    'prettier/prettier': [
      2,
      {
        endOfLine: 'auto',
      },
    ],
    'react/jsx-uses-react': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'react/react-in-jsx-scope': 0,
    '@typescript-eslint/no-unsafe-assignment': 0,
    'no-param-reassign': 0,
    '@typescript-eslint/no-shadow': 0,
    '@typescript-eslint/no-unused-expressions': 0,
    '@typescript-eslint/no-unsafe-member-access': 0,
    '@typescript-eslint/no-misused-promises': 1,
    '@typescript-eslint/no-floating-promises': 1,
    'import/order': [
      2,
      {
        'newlines-between': 'never',
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent', 'sibling', 'index'],
        ],
      },
    ],
    '@typescript-eslint/naming-convention': [
      1,
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.js', '.jsx', '.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
