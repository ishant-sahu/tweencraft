//Startup point for the client side application
import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { loadableReady } from '@loadable/component'
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import { renderRoutes } from 'react-router-config';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Routes from './routes';
import reducers from './client/reducers';

const store = createStore(reducers, window.INITIAL_STATE || {}, applyMiddleware(reduxThunk));

const render = (routes) => {
  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate;
  renderMethod(
    <Provider store={store}>
      <BrowserRouter>
       <div>{renderRoutes(routes)}</div>
      </BrowserRouter>
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
      const nextRoutes = require('./routes').default;
      render(nextRoutes);
    } catch (error) {
      console.error(`==> 😭  Routes hot reloading error ${error}`);
    }
  });
}
