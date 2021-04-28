const {merge} = require('webpack-merge');
const {resolve} = require('path');

const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: './App.ts',
  output: {
    filename: 'bundle.[contenthash].min.js',
    path: resolve(__dirname, '../../dist'),
    publicPath: '/'
  },
  devtool: 'source-map',
  plugins: []
});
