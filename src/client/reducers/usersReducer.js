import { usersAction } from '../actions';

export default (state=[],action) => {
    switch(action.type) {
        case usersAction.FETCH_USERS:
            return action.payload.data;
        default:
            return state;
    }
}