const webpack = require('webpack');
const webpackConfig = require('../webpack.client');
const compiler = webpack(webpackConfig);

export const webpackDevMiddleWare = app => {
  const instance = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    headers: { 'Access-Control-Allow-Origin': '*' },
    stats: 'minimal',
    serverSideRender: true,
    watchOptions: {
      ignored: /node_modules/
    }
  });
  app.use(instance);
  instance.waitUntilValid(() => {
    console.info('Listening at 300');
  });

  app.use(require('webpack-hot-middleware')(compiler));
};
