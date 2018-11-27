const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    app: [
      "webpack-dev-server/client?http://0.0.0.0:8080", // WebpackDevServer host and port
      "webpack/hot/only-dev-server", // "only" prevents reload on syntax errors
      path.join(__dirname, "../src/index.js")
    ]
  },
  stats: "minimal",
  target: "web",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: ["babel-loader"]
        // include: path.join(__dirname, "../src")
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "bundle.js"
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    hot: true,
    publicPath: "/",
    contentBase: path.resolve(__dirname, "../dist")
  },
  devtool: "eval-source-map"
};
