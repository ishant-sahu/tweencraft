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
  let extractor;
  if (__DEV__) {
    extractor = new ChunkExtractor({ statsFile });
  } else {
    extractor = new ChunkExtractor({ statsFile, publicPath: '/' });
  }
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
          <title>Tweencraft</title>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600,700" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i" rel="stylesheet">
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
          <link href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/css/swiper.min.css" rel="stylesheet"></link>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css"></link>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/js/all.min.js"></script>  
          ${extractor.getLinkTags()}
          ${extractor.getStyleTags()}

          </head>
          <body data-spy="scroll" data-target=".fixed-top">
              <div id="root">${content}</div>
              <script>
                window.INITIAL_STATE = ${JSON.stringify(store.getState())}
              </script>
              <script src="https://code.jquery.com/jquery-3.4.1.min.js" ></script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
              <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/Morphext/2.4.4/morphext.min.js"></script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.1/js/swiper.min.js"></script>
              <script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js"></script>
              ${extractor.getScriptTags()}
            

          </body>
          </html>
      `;
  return html;
};
