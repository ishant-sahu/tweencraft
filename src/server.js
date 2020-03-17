import '@babel/polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
import Routes from './routes';
import renderer from './helpers/renderer';
import { webpackDevMiddleWare } from '../tools/webpack-middleware';
import { configureStore } from './helpers/createStore';
const app = express();

app.use(express.static('public'));
webpackDevMiddleWare(app);

app.get('*', (req, res) => {
  const { store } = configureStore({}, req.url);
  try{
  const promises = (matchRoutes(Routes, req.path) || []).map(({ route }) => {
    return route.loadData ? route.loadData(store.dispatch) : Promise.resolve(null);
  });
    Promise.all(promises).then(resp => {
      res.send(renderer(req, store));
    });
  } catch(err) {
    res.status(404).send('Not Found :(');
  }
  
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
