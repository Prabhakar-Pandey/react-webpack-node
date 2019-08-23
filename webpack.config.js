var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  mode: 'development',
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  debug: true,
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ["transform-es2015-destructuring", "transform-object-rest-spread"]
        }
      },
      {
        test: /\.css$/i,
        loaders: ['style-loader', 'css-loader'],
      }
    ],
  },
  resolve: {
    extensions: ['', '.js', '.es6']
  }
};



module.exports = config;