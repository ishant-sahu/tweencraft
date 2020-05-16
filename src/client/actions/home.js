import axios from 'axios';
import {BASE_URL} from '../helpers/config';

export const FETCH_STORIES = 'FETCH_STORIES';
import firebase from 'firebase';
let firebaseConfig = {
  apiKey: "AIzaSyA_kB6QcmZ2SQinPbZwEO8As89ulAtQU5g",
  authDomain: "fir-1-7caf9.firebaseapp.com",
  databaseURL: "https://fir-1-7caf9.firebaseio.com",
  projectId: "fir-1-7caf9",
  storageBucket: "fir-1-7caf9.appspot.com",
  messagingSenderId: "322630851022",
  appId: "1:322630851022:web:56057659b9ffa6df87739f",
  measurementId: "G-LH094SSG2E"
};
firebase.initializeApp(firebaseConfig);

const analytics = firebase.analytics();

export const sendEvent = (data) => async (dispatch) => {
  if(data){
    analytics.logEvent('order_request', data);
    return;
  }
    analytics.logEvent('page', { url: window.location.pathname });
  
}
export const fetchStories = () => async (dispatch) => {
  try {
    const res = await axios.post(
      'http://chimpoon.com:8080/getWebsiteInfo',
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

export const fetchSamples = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${BASE_URL}/fetchSamples`,
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
