module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    es2020: true
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'google'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['tsconfig.json', 'tsconfig.dev.json'],
    tsconfigRootDir: __dirname,
    sourceType: 'module'
  },
  ignorePatterns: [
    '/lib/**/*' // Ignore built files.
  ],
  plugins: [
    '@typescript-eslint',
    'import'
  ],
  rules: {
    'quotes': ['error', 'single'],
    'linebreak-style': 0,
    'comma-dangle': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'new-cap': ['error', { 'newIsCap': false, 'capIsNew': false }],
    'semi': ['error', 'never'],
    'max-len': 'off'
  },
  settings: {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
}
