const LoadablePlugin = require('@loadable/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const environment = require('./tools/environment');
const isDev = environment.getEnvironment();
const path = require('path');

const USE_CSS_MODULES = true;

const getStyleLoaders = (sass = false) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: isDev,
        // If hmr does not work, this is a forceful method
        reloadAll: true
      }
    },
    {
      loader: 'css-loader',
      options: {
        importLoaders: sass ? 2 : 1,
        modules: USE_CSS_MODULES && {
          localIdentName: isDev ? '[name]__[local]' : '[hash:base64:5]',
          context: path.resolve(process.cwd(), 'src')
        },
        sourceMap: true
      }
    },
    { loader: 'postcss-loader', options: { sourceMap: true } }
  ];
  if (sass) loaders.push({ loader: 'sass-loader', options: { sourceMap: true } });

  return loaders;
};

const getPlugins = () => {
  const plugins = [new LoadablePlugin()];
  if(isDev){
    plugins.push(
      new MiniCssExtractPlugin({
        filename: isDev ? '[name].css' : '[name].[contenthash:8].css',
        chunkFilename: isDev ? '[id].css' : '[id].[contenthash:8].css'
      }) 
    );
  }
  return plugins;
}

module.exports = {
  mode: isDev ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: ['react-hot-loader/babel','@loadable/babel-plugin']
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: getStyleLoaders()
      },
      {
        test: /\.(scss|sass)$/,
        use: getStyleLoaders(true)
      },
      {
        test: /\.(gif|png|jpe?g|webp|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 10 * 1024, name: '[name].[hash:8].[ext]' }
          }
        ]
      }
    ]
  },
  plugins: getPlugins(),
  resolve: {
    alias: { 'react-dom': '@hot-loader/react-dom' }
  }
};
