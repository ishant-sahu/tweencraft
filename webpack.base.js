const LoadablePlugin = require('@loadable/webpack-plugin');
const environment = require('./tools/environment');
const isDev = environment.getEnvironment();

module.exports = {
  mode: 'development',
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
              plugins: ['@loadable/babel-plugin']
            }
          }
        ]
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
  plugins: [
    new LoadablePlugin()
  ]
};
