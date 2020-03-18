import React from 'react';
import path from 'path';
import { ChunkExtractor, ChunkExtractorManager } from '@loadable/server';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import Routes from '../routes';

export default (req, store) => {
  const statsFile = path.resolve(process.cwd(), 'public/loadable-stats.json');
  const extractor = new ChunkExtractor({ statsFile });
  const content = renderToString(
    <ChunkExtractorManager extractor={extractor}>
      <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
          <div>{renderRoutes(Routes)}</div>
        </StaticRouter>
      </Provider>
    </ChunkExtractorManager>
  );
  const html = `
          <html>
          <head>
          ${extractor.getLinkTags()}
          ${extractor.getStyleTags()}
          </head>
          <body>
              <div id="root">${content}</div>
              <script>
                window.INITIAL_STATE = ${JSON.stringify(store.getState())}
              </script>
              ${extractor.getScriptTags()}
          </body>
          </html>
      `;
  return html;
};
