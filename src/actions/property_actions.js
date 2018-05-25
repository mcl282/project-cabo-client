import axios from 'axios';
import { CREATE_PROPERTY, CREATE_PROPERTY_ERROR, FETCH_PROPERTY } from './types';
import {createUnit} from './unit_actions'
import { ROOT_URL_VERSION } from './index.js';
import {auth_header} from './auth_header'




export const createProperty = (data, callback) => {
  return function (dispatch){
  axios({
    method : 'POST',
    url: `${ROOT_URL_VERSION}/properties.json`, 
    data: data, 
    headers: auth_header 
  })
    .then(response => {
      console.log(response)
      callback(response.data.property.id)
      dispatch({ 
        type: CREATE_PROPERTY,
        payload: response
      });
    })
    .catch( error => {
    //if request is bad, show an error to the user
    console.log(error.response);
    dispatch({
      type: CREATE_PROPERTY_ERROR,
      payload: error.response
    });
    })
  }
}

export const fetchProperty = (id) => {
  
  return function (dispatch){
    axios({
      method: 'GET',
      url:  `${ROOT_URL_VERSION}/properties/${id}`, 
      headers: auth_header})
    .then(response => {
      console.log(response)
      dispatch({ 
        type: FETCH_PROPERTY,
        payload: response
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}