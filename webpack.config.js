var webpack = require('webpack');

// postcss plugins
var cssimport = require('postcss-import');
var customProperties = require('postcss-custom-properties');
var autoprefixer = require('autoprefixer');
var csswring = require('csswring');
var cssnested = require('postcss-nested');

module.exports = {
  entry: {
    app : ['./src/main.js']
  },
  output: {
    path: __dirname + '/build/',
    filename: 'bundle.js'
  },
  devtool: 'eval',
  debug: true,
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, include: /src/, loader: 'babel-loader', query: {modules: 'common'} },
      { test: /\.less/, loader: 'style-loader!css-loader!less-loader!postcss-loader' }
    ]
  },
  // postcss: [cssimport, cssnested, customProperties, autoprefixer, csswring],
  devServer: {
    contentBase: './build/',
    port: 1337,
    hot: true,
    inline: true
  }
};
