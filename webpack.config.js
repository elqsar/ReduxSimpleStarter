const webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/index'
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel?presets[]=es2015'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: './'
  }
};
