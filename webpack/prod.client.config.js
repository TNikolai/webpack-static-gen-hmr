const { rules, output } = require('./webpack.parts');

module.exports = {
  mode: 'production',
  stats: 'minimal',
  entry: './src/index.js',
  output: output(),
  module: { rules },
};
