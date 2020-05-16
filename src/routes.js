import {
  Home,
  Samples,
  Contact,
  Pricing,
  Login,
  VideoInformation,
  Script,
  CallOfAction,
  Characters,
  Logo,
  Payment,
  Orders,
  SingleOrder,
  HowItWorks
} from './client/pages';
import { action } from './client/actions';
import App from './client/pages/App';
const base = process.env.BASE ? `/${process.env.BASE}/`: '/';
export default [
  {
    component: App,
    routes: [
      {
        path: `${base}`,
        component: Home,
        exact: true,
        loadData: (dispatch) => {
          //return dispatch(action.fetchStories());
        },
      },
      {
        path: `${base}samples`,
        component: Samples,
        exact: true,
        loadData: (dispatch) => {
          //return dispatch(action.fetchSamples());
        },
      },
      {
        path: `${base}contact`,
        component: Contact,
        exact: true,
        loadData: (dispatch) => {
          //return dispatch(action.fetchSamples());
        },
      },
      {
        path: `${base}pricing`,
        component: Pricing,
        exact: true,
        loadData: (dispatch) => {
          //return dispatch(action.fetchSamples());
        },
      },
      {
        path: `${base}order-now`,
        component: Login,
        exact: true,
        loadData: (dispatch) => {
          //return dispatch(action.fetchSamples());
        },
      },
      {
        path: `${base}video-information`,
        component: VideoInformation,
        exact: true,
        loadData: (dispatch) => {
          //return dispatch(action.fetchSamples());
        },
      },
      {
        path: `${base}script`,
        component: Script,
        exact: true,
        loadData: (dispatch) => {
          //return dispatch(action.fetchSamples());
        },
      },
      {
        path: `${base}call-of-action`,
        component: CallOfAction,
        exact: true,
        loadData: (dispatch) => {
          //return dispatch(action.fetchSamples());
        },
      },
      {
        path: `${base}characters`,
        component: Characters,
        exact: true,
        loadData: (dispatch) => {
          //return dispatch(action.fetchSamples());
        },
      },
      {
        path: `${base}upload-logo`,
        component: Logo,
        exact: true,
        loadData: (dispatch) => {
          //return dispatch(action.fetchSamples());
        },
      },
      {
        path: `${base}payment`,
        component: Payment,
        exact: true,
        loadData: (dispatch) => {
          //return dispatch(action.fetchSamples());
        },
      },
      {
        path: `${base}orders`,
        component: Orders,
        exact: true,
        loadData: (dispatch) => {
          //return dispatch(action.fetchSamples());
        },
      },
      {
        path: `${base}order/:id`,
        component: SingleOrder,
        exact: true,
        loadData: (dispatch) => {
          //return dispatch(action.fetchSamples());
        },
      },
      {
        path: `${base}how-it-works`,
        component: HowItWorks,
        exact: true,
        loadData: (dispatch) => {
          //return dispatch(action.fetchSamples());
        },
      },
    ],
  },
];
