import axios from 'axios';
import {  FETCH_UNIT, 
          FETCH_UNITS,
          CREATE_UNIT,
          CREATE_UNIT_ERROR,
          UPDATE_UNIT_NAME
      } from './types';
import { ROOT_URL_VERSION } from './index.js';
import {auth_header} from './auth_header'

export const fetchUnit = (id) => {
  
  return function (dispatch){
    axios({
      method: 'GET',
      url:  `${ROOT_URL_VERSION}/units/${id}`, 
      headers: auth_header})
    .then(response => {
      dispatch({ 
        type: FETCH_UNIT,
        payload: response
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

export const fetchUnits = (propertyId) => {
  return function (dispatch){
    
    axios({
      method: 'GET',
      url:  `${ROOT_URL_VERSION}/properties/${propertyId}/units`, 
      headers: auth_header})
    .then(response => {
      console.log(response)
      dispatch({ 
        type: FETCH_UNITS,
        payload: response
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}


export const createUnit = (propertyId) => {
  console.log(`called: ${ROOT_URL_VERSION}/properties/${propertyId}/units.json`); 
  
  return function (dispatch){
  axios({

    method : 'POST',
    url: `${ROOT_URL_VERSION}/properties/${propertyId}/units.json`, 
    data: propertyId, 
    headers: auth_header     
    

  })

    .catch( error => {
    //if request is bad, show an error to the user
    console.log(error.response);
    dispatch({
      type: CREATE_UNIT_ERROR,
      payload: error.response
    });
    })
  }
}

export const updateUnitName = (value, id) => {
  console.log(id)
  console.log(value)
  return function (dispatch){
    
    axios({
      method: 'PATCH',
      url:  `${ROOT_URL_VERSION}/units/${id}`, 
      data: value,
      headers: auth_header})
    .then(response => {
      console.log(response)
      dispatch({ 
        type: UPDATE_UNIT_NAME,
        payload: response
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}