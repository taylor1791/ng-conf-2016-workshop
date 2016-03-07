'use strict';

// Modules
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var ENV = process.env.npm_lifecycle_event;

module.exports = {
  entry: {app: './src/app/core/app.js'},

  output: {
    path: __dirname + '/dist',
    publicPath: ENV === 'build' ? '' : 'http://localhost:8080/',
    filename: ENV === 'build' ? '[name].[hash].js' : '[name].bundle.js',
    chunkFilename: ENV === 'build' ? '[name].[hash].js' : '[name].bundle.js',
  },

  devtool: 'sourcemap',

  module: {
    preLoaders: [],
    loaders: [
      { test: /\.css$/,  loader: "style-loader!css-loader" },
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
    stats: 'minimal'
  }
};

// Add build specific plugins
if (ENV === 'build') {
  module.exports.plugins.push(
    new CopyWebpackPlugin([{ from: __dirname + '/src/public' }]),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  )
}

