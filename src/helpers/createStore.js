import { applyMiddleware, createStore } from 'redux';
import { createBrowserHistory, createMemoryHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import reduxThunk from 'redux-thunk';
import createRootReducer from '../client/reducers';

export const configureStore = (state = {}, url) => {
  const history = getHistory(url);
  const middlewares = [routerMiddleware(history), reduxThunk];
  const reducers = createRootReducer(history);
  const store = createStore(reducers, state, applyMiddleware(...middlewares));
  moduleHotReload(history);
  return { store, history };
};

const moduleHotReload = history => {
  if (module.hot) {
    module.hot.accept('../client/reducers', () => {
      try {
        const createNextReducer = require('../client/reducers').default;
        store.replaceReducer(createNextReducer(history));
      } catch (error) {
        console.error(`Reducer hot reloading error ${error}`);
      }
    });
  }
};

const getHistory = url => {
  const isServer = typeof window === 'undefined';
  const history = isServer
    ? createMemoryHistory({
        initialEntries: [url || '/']
      })
    : createBrowserHistory();
    return history;
};
