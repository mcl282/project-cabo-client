import axios from 'axios';
import { CREATE_TRANSFER_CUSTOMER, CREATE_TRANSFER_CUSTOMER_ERROR, CREATE_TRANSFER_SOURCE, CREATE_TRANSFER_SOURCE_ERROR, FETCH_TRANSFER_SOURCE, FETCH_TRANSFER_SOURCE_ERROR, UPDATE_TRANSFER_SOURCE, UPDATE_TRANSFER_SOURCE_ERROR } from './types';
import { ROOT_URL_VERSION } from './index.js';
import {auth_header} from './auth_header'

export const createTransferCustomer = (values, callback) => {
  return function (dispatch){
    
  axios({
    method : 'POST',
    url: `${ROOT_URL_VERSION}/transfer_customers.json`, 
    data: { values }, 
    headers: auth_header 
  })
    .then(response => {
      console.log(response);
      dispatch({ 
        type: CREATE_TRANSFER_CUSTOMER,
        payload: response
      });
    })
    .then(() => callback())
    .catch( error => {
    //if request is bad, show an error to the user
    console.log(error.response.data);
    dispatch({
      type: CREATE_TRANSFER_CUSTOMER_ERROR,
      payload: error.response
    });
    });
  };
};

export const createTransferSource = (values, callback) => {
  return function (dispatch){
    
  axios({
    method : 'POST',
    url: `${ROOT_URL_VERSION}/transfer_sources.json`, 
    data: { values }, 
    headers: auth_header 
  })
    .then(response => {
      console.log(response);
      dispatch({ 
        type: CREATE_TRANSFER_SOURCE,
        payload: response
      });
    })
    .then(() => callback())
    .catch( error => {
    //if request is bad, show an error to the user
    console.log(error.response);
    dispatch({
      type: CREATE_TRANSFER_SOURCE_ERROR,
      payload: error.response
    });
    });
  };
};

export const fetchTransferSource = () => {
  return function (dispatch){
    
  axios({
    method : 'GET',
    url: `${ROOT_URL_VERSION}/transfer_sources.json`, 
    headers: auth_header 
  })
    .then(response => {
      console.log(response);
      dispatch({ 
        type: FETCH_TRANSFER_SOURCE,
        payload: response
      });
    })
    .catch( error => {
    //if request is bad, show an error to the user
    console.log(error.response);
    dispatch({
      type: FETCH_TRANSFER_SOURCE_ERROR,
      payload: error.response
    });
    });
  };
};

export const updateTransferSource = (values, id, callback) => {
  return function (dispatch){
  console.log(id)
  axios({
    method: 'PATCH',
    url: `${ROOT_URL_VERSION}/transfer_sources/${id}.json`,
    data: { values },
    headers: auth_header 
  })
    .then(response => {
      console.log(response);
      dispatch({ 
        type: UPDATE_TRANSFER_SOURCE,
        payload: response
      });
    })
    .catch( error => {
    //if request is bad, show an error to the user
    console.log(error.response);
    dispatch({
      type: UPDATE_TRANSFER_SOURCE_ERROR,
      payload: error.response
    });
    });
  };
};
