import { Home, UsersList } from './client/pages';
import { usersAction } from './client/actions';
import App from './client/pages/App';

export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        component: Home,
        exact: true
      },
      {
        path: '/users',
        component: UsersList,
        loadData: dispatch => {
          return dispatch(usersAction.fetchUsers());
        },
        exact: true
      }
    ]
  }
];
