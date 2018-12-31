const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { rules, output } = require('./webpack.parts');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: output(),
  module: { rules },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve('public/index.html') }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    hot: true,
    publicPath: '/',
    contentBase: path.resolve('build'),
    historyApiFallback: true,
  },
  devtool: 'cheap-module-eval-source-map',
};
