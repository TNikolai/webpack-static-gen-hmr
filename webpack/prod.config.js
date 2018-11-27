const path = require("path");
const StaticSiteGeneratorPlugin = require("static-site-generator-webpack-plugin");

module.exports = {
  entry: "./src/server.js",
  stats: "minimal",
  target: "node",
  cache: true,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    publicPath: "/",
    libraryTarget: "commonjs",
    path: path.join(__dirname, "../build"),
    filename: "bundle.js"
  },
  plugins: [
    new StaticSiteGeneratorPlugin({
      crawl: true,
      globals: { window: {} }
    })
  ],
  devtool: "eval-source-map"
};
