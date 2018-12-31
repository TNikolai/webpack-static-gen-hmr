const path = require('path');

const rules = [
  {
    test: /\.js$/,
    exclude: /node_modules/,
    use: 'babel-loader',
  },
];

const output = overrides => ({
  path: path.resolve('build'),
  filename: 'bundle.js',
  ...overrides,
});

module.exports = { rules, output };
