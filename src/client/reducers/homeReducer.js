import { homeAction } from '../actions';

export default (state=[],action) => {
    switch(action.type) {
        case homeAction.FETCH_STORIES:
            return action.payload.data;
        default:
            return state;
    }
}