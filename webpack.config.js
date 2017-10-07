var path = require('path');
const webpack = require('webpack');
const publicPath = '/dist/';
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  devtool: 'cheap-module-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'MN Mini Adventures',
      filename: 'index.html',
      template: './src/index.html'
    }),
  ],
  output: {
    path: path.join(__dirname, publicPath),
    filename: '[name].js',
    sourceMapFilename: '[name].map',
  },
  devServer: {
    port: 3000,
    host: 'localhost',
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal',
    publicPath: publicPath,
    contentBase: path.join(__dirname, publicPath),
  },
  module: {
    rules: [
      { 
       test: /\.css$/, use: ['style-loader', 'css-loader'], 
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ["babel-loader"]
      }]
  },
}