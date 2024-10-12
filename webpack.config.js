const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./client/src/index.jsx",
  output: {
    filename: "main.js",
    path: path.join(__dirname, "/client/dist")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  mode: "development",
  resolve: {
    extensions: [".js",".jsx"]
  },
}