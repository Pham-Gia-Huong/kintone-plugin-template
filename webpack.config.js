const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    config: './src/config/js/config.js',
    desktop: './src/config/js/desktop.js',
    index: './src/customize/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve('build/js'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: './src/config/css',
        to: path.resolve('build/css'),
      },
      {
        from: './src/config/html',
        to: path.resolve('build/html'),
      },
      {
        from: './src/config/image',
        to: path.resolve('build/image'),
      },
      {
        from: './src/config/manifest.json',
        to: path.resolve('build'),
      },
    ]),
  ],
};
