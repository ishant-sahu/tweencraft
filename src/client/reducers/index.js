import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import usersReducer from './usersReducer';

export default history =>
  combineReducers({
    users: usersReducer,
    router: connectRouter(history)
  });
