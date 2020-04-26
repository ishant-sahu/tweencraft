
import React from 'react';
import loadable from '@loadable/component';
import Loader from '../components/Loader/';

export const Home = loadable(() => import('./Home'), {
  fallback:  <Loader />
});

export const UsersList = loadable(() => import('./UsersList'), {
  fallback:  <Loader />
});
