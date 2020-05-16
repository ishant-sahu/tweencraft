import axios from 'axios';
import {BASE_URL} from '../helpers/config';

export const FETCH_STORIES = 'FETCH_STORIES';
import firebase from 'firebase';
let firebaseConfig = {
  apiKey: "AIzaSyCaZCFEiG7I3V_2Qoo5DNLhZYFoWpn10ps",
  authDomain: "chimpoon-2b6c5.firebaseapp.com",
  databaseURL: "https://chimpoon-2b6c5.firebaseio.com",
  projectId: "chimpoon-2b6c5",
  storageBucket: "chimpoon-2b6c5.appspot.com",
  messagingSenderId: "70301217525",
  appId: "1:70301217525:web:18ea66a047be1b5f364bbc",
  measurementId: "G-6WEV12THXG"
};
firebase.initializeApp(firebaseConfig);

const analytics = firebase.analytics();

export const sendEvent = (event) => async (dispatch) => {
  if(event){
    analytics.logEvent(event.type, event.data);
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
