var webpack = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: "public/dist",
    filename: "index.js"
  },
  module: {
    loaders: [{ loader: "babel-loader" }]
  },
  plugins: [new webpack.optimize.UglifyJsPlugin()]
};
