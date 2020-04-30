const path = require('path');
const webpack = require('webpack');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const environment = require('./tools/environment');
const isDev = environment.getEnvironment();

const getPlugins = () => {
  const plugins = [];
  plugins.push(
    new webpack.DefinePlugin({
      __DEV__: isDev,
    })
  );
  plugins.push(
    new FaviconsWebpackPlugin({logo: './src/client/images/tweenkraft/favicon.png', inject: true})
  );
  return plugins;
};

const config = {
  target: 'node',
  entry: './src/server.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  externals: [webpackNodeExternals()],
  plugins: getPlugins(),
};

module.exports = merge(baseConfig, config);
