import React from 'react';
import { renderRoutes } from 'react-router-config';

import NavBar from '../components/NavBar/';
import './app.css';

import { hot } from 'react-hot-loader/root';

const App = ({ route }) => {
  return (
    <div>
      <NavBar />
      <div className='body-components'>{renderRoutes(route.routes)}</div>
    </div>
  );
};

export default hot(App);
