import axios from 'axios';
import { SUBMIT_ADDRESS, FETCH_PROPERTIES } from './types';
import { ROOT_URL, ROOT_URL_API_VERSION } from '../urls';



export function fetchProperties() {
  return function (dispatch){
    axios.get(`${ROOT_URL}/${ROOT_URL_API_VERSION}/properties`)
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
