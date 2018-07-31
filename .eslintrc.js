module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: ['react', 'jsx-a11y', 'import'],
  rules: {
    'no-unused-expressions': 0,
    'class-methods-use-this': 1,
    'react/forbid-prop-types': 0,
    'react/no-array-index-key': 0,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/react-in-jsx-scope': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-no-bind': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-indent': [0, 2],
    'react/jsx-one-expression-per-line': 0,
    'comma-dangle': ['error', 'never'],
    semi: [0, 'always'],
    quotes: ['error', 'single'],
    'click-events-have-key-events': 0,
    'react/destructuring-assignment': [0, 'always']
  }
}
