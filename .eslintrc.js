module.exports = {
  root: true,
  env: {
    node: true,
    "jest/globals": true
  },
  extends: [
  ],
  plugins: ['jest'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  rules: {
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'class-methods-use-this': [
      'error',
      {
        exceptMethods: [
          'render',
          'change',
          'changeHandle',
          'beforeHandle',
          'setTitle',
          'bindKeyUp',
          'setScroll',
          'returnModel',
          'popoverClick',
        ],
      },
    ],
    'no-unused-vars': [
      'error',
      { varsIgnorePattern: '^V|Moment|Entity$|ENUM$' },
    ],
    'no-underscore-dangle': ['error', { allow: ['_componentTag'] }],
    'spaced-comment': 'off',
    'no-dupe-keys': 'off',
    'no-console': 'always',
    'no-extend-native': 'off',
    'no-plusplus': 'off',
    'max-len': [
      'error',
      {
        code: 100,
        ignoreTrailingComments: true,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'no-param-reassign': ['error', { props: false }],
    'no-console': 'error',
    'no-debugger': 'error'
  }
};
