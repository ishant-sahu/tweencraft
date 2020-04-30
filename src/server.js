import '@babel/polyfill';
import express from 'express';
import { matchRoutes } from 'react-router-config';
const nodemailer = require('nodemailer');
const sendGridTransport = require('nodemailer-sendgrid-transport');
import cors from 'cors';
import bodyParser from 'body-parser';

import Routes from './routes';
import renderer from './helpers/renderer';
import { webpackDevMiddleWare } from '../tools/webpack-middleware';
import { configureStore } from './helpers/createStore';
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded());
app.use(express.static('public'));
app.use('/favicon.ico', express.static(__dirname + 'src/client/images/tweenkraft/favicon.png'));
if(__DEV__){
  webpackDevMiddleWare(app);
}

app.post('/message', (req, res) => {
 
  try{
    const transporter = nodemailer.createTransport(
      sendGridTransport({
        auth: {
          api_key:
            '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'
        }
      })
    );
    transporter.sendMail({
      from: `Tweencraft Website: ${req.body.email}`,
      to:'ad@tweencraft.com',
      text: req.body.message || '',
      subject: `Mail from user from website, Name:${req.body.name}, Phone:${req.body.phone}, Email: ${req.body.email}`
    })
  } catch(err){
    console.log(err);
  }
  res.status(200).send();
});

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
