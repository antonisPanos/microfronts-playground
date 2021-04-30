const {merge} = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'development',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './App.ts'
  ],
  devServer: {
    hot: true,
    port: 3000
  },
  devtool: 'cheap-module-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
