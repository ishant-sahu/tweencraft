import React from 'react';
import { renderRoutes } from 'react-router-config';

import { hot } from 'react-hot-loader/root'

const App = ({route}) => {
    return <div>{renderRoutes(route.routes)}</div>;
}

export default hot(App);
