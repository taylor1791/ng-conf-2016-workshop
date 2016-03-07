'use strict';

// Modules
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {app: './src/app/core/app.js'},

  output: {
    path: __dirname + '/dist',
    publicPath: 'http://localhost:8080/',
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },

  devtool: 'sourcemap',

  module: {
    preLoaders: [],
    loaders: [
      { test: /\.css$/,  loader: 'style-loader!css-loader' },
      { test: /.*\.js$/, loader: 'ng-annotate' },
      { test: /\.html$/, loader: 'raw' },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file',
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/assets/index.html',
      title: 'Dino-Mail',
      favicon: './src/assets/img/favicon.ico',
      inject: 'body'
    })
  ],

  devServer: {
    contentBase: './src/public',
    stats: 'minimal',
    proxy: {
      '/api/*': {
        target: 'http://localhost:8081',
        secure: false,
      },
    }
  }
};

