
import React from 'react';
import loadable from '@loadable/component';

export const Home = loadable(() => import('./Home'), {
  fallback: <div>Loading... </div>
});

export const UsersList = loadable(() => import('./UsersList'), {
  fallback: <div>Loading ...</div>
});
