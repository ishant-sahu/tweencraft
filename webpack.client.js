const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');
const environment = require('./tools/environment');
const isDev = environment.getEnvironment();
isSSR = process.env.SSR === 'true' ? true : false ;

const getEntry = () => {
  let entry = './src/client.js';
  if(isSSR && isDev){
    entry = ['webpack-hot-middleware/client?reload=true', './src/client.js']
  }
  if (!isDev) entry = ['./src/client.js'];

  return entry;
};

const getPlugins = () => {
  const plugins = [];
  if(isDev){
    if(isSSR){
      plugins.push(
        new webpack.HotModuleReplacementPlugin()
      );
    } else {
      plugins.push(new HtmlWebpackPlugin({
        template: './tools/index.html'
      }))
    }
   }
  return plugins;
}

const devServer = () => {
   return {
    contentBase: path.resolve(__dirname, 'src'),
    publicPath: '/',
    historyApiFallback: true,
    port: 3000,
    compress: true,
    disableHostCheck: true,
    overlay: true,
  }
}


const config = {

  entry: getEntry(),
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: !isSSR ? '/' : '/public/',
    filename: 'bundle-client.js'
  },
  plugins: getPlugins(),
  devServer : !isSSR ? devServer() : {}
};

module.exports = merge(baseConfig,config);
