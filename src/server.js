import '@babel/polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './routes';
import renderer from './helpers/renderer';
import { webpackDevMiddleWare } from '../tools/webpack-middleware';
import createStore from './helpers/createStore';
const app = express();

app.use(express.static('public'));
webpackDevMiddleWare(app);

app.get('*', (req, res) => {
  const store = createStore();

  const promises = (matchRoutes(Routes, req.path) || []).map(({ route }) => {
    return route.loadData ? route.loadData(store.dispatch) : null;
  });
  Promise.all(promises).then((resp) => {
    res.send(renderer(req, store));
  });
  
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
