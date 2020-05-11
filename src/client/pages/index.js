
import React from 'react';
import loadable from '@loadable/component';
import Loader from '../components/Loader/';

export const Home = loadable(() => import('./Home'), {
  fallback:  <Loader />
});

export const Samples = loadable(() => import('./Samples'), {
  fallback:  <Loader />
});

export const Contact = loadable(() => import('./Contact'), {
  fallback:  <Loader />
});

export const Pricing = loadable(() => import('./Pricing'), {
  fallback:  <Loader />
});

export const Login = loadable(() => import('./Login'), {
  fallback:  <Loader />
});

export const VideoInformation = loadable(() => import('./VideoInformation'), {
  fallback:  <Loader />
});

export const Script = loadable(() => import('./Script'), {
  fallback:  <Loader />
});

export const CallOfAction = loadable(() => import('./CallOfAction'), {
  fallback:  <Loader />
});

export const Characters = loadable(() => import('./Characters'), {
  fallback:  <Loader />
});

export const Logo = loadable(() => import('./Logo'), {
  fallback:  <Loader />
});

export const Payment = loadable(() => import('./Payment'), {
  fallback:  <Loader />
});


export const Orders = loadable(() => import('./Orders'), {
  fallback:  <Loader />
});

export const SingleOrder = loadable(() => import('./SingleOrder'), {
  fallback:  <Loader />
});



