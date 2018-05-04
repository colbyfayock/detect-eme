const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {

  entry: {
    'detect-eme': './src/js/detect-eme.js',
    'index': './src/js/index.js',
  },

  output: {
    filename: '[name].js'
  },

  devServer: {
    https: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]

};