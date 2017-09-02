const path = require("path");

module.exports = {
  resolve: {
    extensions: ["*", ".js", ".json"]
  },
  devtool: "eval-source-map",
  entry: ["./src/index"],
  target: "node",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js"
  },
  module: {
    rules: [
      { test: /\.js?$/, exclude: /node_modules/, loaders: ["babel-loader"] }
    ]
  }
};
