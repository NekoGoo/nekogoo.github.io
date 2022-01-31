/* eslint-disable import/extensions */
const { merge } = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const dev = require('./webpack.dev.js');

module.exports = merge(dev, {
  devServer: {
    static: './wwwroot',
    open: true, // https://webpack.js.org/configuration/dev-server/#devserveropen
    hot: true, // https://webpack.js.org/configuration/dev-server/#devserverhot
    // watch mode enabled by default in 'webpack-dev-server' (https://webpack.js.org/configuration/watch)
  },
  plugins: [new ReactRefreshWebpackPlugin()],
});
