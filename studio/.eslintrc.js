module.exports = {
  extends: ["standard"]
  parser: 'babel-eslint',
  rules: {
    'react/prop-types': 0,
    'object-curly-spacing': ['error', 'always'],
    'jsx-quotes': ['error', 'prefer-double'],
    'comma-dangle': ['error', 'ignore'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
  },
}
