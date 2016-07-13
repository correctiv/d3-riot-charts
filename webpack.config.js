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
    path: __dirname + '/dist/',
    filename: 'correctiv-simple-charts.min.js'
  },
  devtool: 'eval',
  debug: true,
  module: {
    preLoaders: [
      { test: /\.tag$/, exclude: /node_modules/, include: /src/, loader: 'riotjs-loader', query: { type: 'none'} }
    ],
    loaders: [
      { test: /\.js|\.tag$/, exclude: /node_modules/, include: /src/, loader: 'babel-loader', query: { presets: 'es2015'} },
      { test: /\.less/, loader: 'style-loader!css-loader!less-loader!postcss-loader' }
    ]
  },
  // have riot global
  plugins: [
    new webpack.ProvidePlugin({
      riot: 'riot'
    })
  ],
  // postcss: [cssimport, cssnested, customProperties, autoprefixer, csswring],
  devServer: {
    contentBase: './',
    port: 1337,
    hot: true,
    inline: true
  }
};
