import {Home,UsersList} from './client/pages';
import { usersAction } from './client/actions';

export default [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/users',
    component: UsersList,
    loadData: (dispatch) => {
      return dispatch(usersAction.fetchUsers())
    },
    exact: true
  }
];
