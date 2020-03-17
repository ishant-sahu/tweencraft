const LoadablePlugin = require('@loadable/webpack-plugin');
const environment = require('./tools/environment');
const isDev = environment.getEnvironment();
console.log(isDev);
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
  plugins: [new LoadablePlugin()],
  resolve: {
    alias: { 'react-dom': '@hot-loader/react-dom' }
  }
};
