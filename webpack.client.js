const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');
const environment = require('./tools/environment');
const isDev = environment.getEnvironment();
isSSR = process.env.SSR === 'true' ? true : false;

const getEntry = () => {
  let entry = ['./src/client.js'];
  if (isSSR && isDev) {
    entry = ['webpack-hot-middleware/client?reload=true', './src/client.js'];
  }
  return entry;
};

const getPlugins = () => {
  const plugins = [];
  if (isDev) {
    if (isSSR) {
      plugins.push(new webpack.HotModuleReplacementPlugin());
    } else {
      plugins.push(
        new HtmlWebpackPlugin({
          template: './tools/index.html',
        })
      );
    }
  } else {
    if (!isSSR) {
      plugins.push(
        new HtmlWebpackPlugin({
          template: './tools/index.html',
        })
      );
    }
  }
  plugins.push(
    new webpack.DefinePlugin({
      'process.env.BASE': process.env.BASE
        ? JSON.stringify(process.env.BASE)
        : null,
    })
  );
  plugins.push(
    new FaviconsWebpackPlugin('./src/client/images/tweenkraft/favicon.png')
  );
  return plugins;
};

const devServer = () => {
  return {
    contentBase: path.resolve(__dirname, 'src'),
    publicPath: '/',
    historyApiFallback: true,
    port: 3000,
    compress: true,
    disableHostCheck: true,
    overlay: true,
  };
};

const config = {
  entry: getEntry(),
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: isDev ? '/' : '',
    filename: isDev ? '[name].js' : '[name].[chunkhash:8].js',
    chunkFilename: isDev ? '[id].js' : '[id].[chunkhash:8].js',
  },
  plugins: getPlugins(),
  devServer: !isSSR && isDev ? devServer() : {},
};

module.exports = merge(baseConfig, config);
