module.exports = {
    root: true,
    extends: [
      'airbnb-base',
      'plugin:prettier/recommended'
    ],
    parserOptions: {
      ecmaVersion: 9
    },
    env: {
        es6: true,
        node: true
    },
    rules: {
      'semi': ['error', 'never'],
      'prefer-promise-reject-errors': 'off',
      'import/no-extraneous-dependencies': ["error", {'devDependencies': ['./api/config/**/*.js']}],
      'no-plusplus': ["error", { "allowForLoopAfterthoughts": true }],
    }
  }
  