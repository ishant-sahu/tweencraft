
const path = require('path');
const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
const environment = require('./tools/environment');
const isDev = environment.getEnvironment();


const config = {
  target: 'node',
  entry: './src/server.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig,config);
