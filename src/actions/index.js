import axios from 'axios';
import { FETCH_PROPERTIES } from './types';
import {auth_header} from './auth_header'

/*list out all actions from other files here */
export * from './stripe_actions';
export * from './transfer_actions';
export * from './user_actions';
export * from './dropzone_actions';
export * from './property_actions';
export * from './unit_actions';

export let ROOT_URL = "";
const API_VERSION = process.env.REACT_APP_ROOT_URL_API_VERSION;

if(process.env.NODE_ENV==='development') {
  ROOT_URL=process.env.REACT_APP_ROOT_URL_DEV;
} else {
  ROOT_URL=process.env.REACT_APP_ROOT_URL_PROD;
}

export const ROOT_URL_VERSION = `${ROOT_URL}/${API_VERSION}`;



export function fetchProperties() {
  return function (dispatch){
    axios({
      method: 'GET',
      url:  `${ROOT_URL_VERSION}/properties`, 
      headers: auth_header})
    .then(response => {
      dispatch({ 
        type: FETCH_PROPERTIES,
        payload: response
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
