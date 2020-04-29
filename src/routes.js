import { Home } from './client/pages';
import { homeAction } from './client/actions';
import App from './client/pages/App';
const base = process.env.BASE || '';

export default [
  {
    component: App,
    routes: [
      {
        path: `/${base}`,
        component: Home,
        exact: true,
        loadData: dispatch => {
          return dispatch(homeAction.fetchStories());
        }
      }
    ]
  }
];


  

