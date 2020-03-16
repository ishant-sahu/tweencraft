const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');
const environment = require('./tools/environment');
const isDev = environment.getEnvironment();


const getEntry = () => {
  // Development
  let entry = ['webpack-hot-middleware/client?reload=true', './src/client.js'];

  // production
  if (!isDev) entry = ['./src/client.js'];

  return entry;
};

const getPlugins = () => {
  const plugins = [];
  if(isDev){
    plugins.push(
      new webpack.HotModuleReplacementPlugin()
    );
  }
  return plugins;
}

const config = {

  entry: getEntry(),
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/js/',
    filename: 'bundle-client.js'
  },
  plugins: getPlugins()
};

module.exports = merge(baseConfig,config);
