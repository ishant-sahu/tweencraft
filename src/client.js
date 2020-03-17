//Startup point for the client side application
import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { loadableReady } from '@loadable/component';
import { ConnectedRouter } from 'connected-react-router';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import Routes from './routes';
import {configureStore} from './helpers/createStore';

const {store, history} = configureStore( window.INITIAL_STATE || {});
const render = (routes) => {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
  renderMethod(
    <Provider store={store}>
       <ConnectedRouter history={history}>
       <div>{renderRoutes(routes)}</div>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  );
}

loadableReady(() => {
  render(Routes);
});

if (module.hot) {
  // Enable webpack hot module replacement for routes
  module.hot.accept('./routes', () => {
    try {
      console.log("============================");
      const nextRoutes = require('./routes').default;
      
      render(nextRoutes);
    } catch (error) {
      console.error(`==> 😭  Routes hot reloading error ${error}`);
    }
  });
}
