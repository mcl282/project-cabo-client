import axios from 'axios';
import { SUBMIT_ADDRESS, FETCH_PROPERTIES } from './types';

const ROOT_URL = "";
const API_VERSION = process.env.REACT_APP_ROOT_URL_API_VERSION;

if(process.env.NODE_ENV==='development') {
  ROOT_URL=process.env.REACT_APP_ROOT_URL_DEV;
} else {
  ROOT_URL=process.env.REACT_APP_ROOT_URL_PROD;
}

export function fetchProperties() {
  return function (dispatch){
    axios.get(`${ROOT_URL}/${API_VERSION}/properties`)
    .then(response => {
      dispatch({ 
        type: FETCH_PROPERTIES,
        payload: response.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
