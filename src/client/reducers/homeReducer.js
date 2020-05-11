import { action } from '../actions';

export default (state=[],action) => {
    switch(action.type) {
        case action.FETCH_STORIES:
            return action.payload.data;
        default:
            return state;
    }
}