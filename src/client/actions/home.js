import axios from 'axios';

export const FETCH_STORIES = 'FETCH_STORIES';

export const fetchStories = () => async (dispatch) => {
  try {
    const res = await axios.post(
      'http://chimpoon.com:8181/getWebsiteInfo',
      {},
      {
        auth: {
          username: 'vipin',
          password: 'gravity',
        },
      }
    );
    dispatch({
      type: FETCH_STORIES,
      payload: res,
    });
  } catch (err) {
    //console.log(err);
  }
};
