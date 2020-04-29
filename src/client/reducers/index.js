import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import homeReducer from './homeReducer';

export default history =>
  combineReducers({
    home: homeReducer,
    router: connectRouter(history)
  });
