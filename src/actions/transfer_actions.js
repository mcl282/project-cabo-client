import axios from 'axios';
import { CREATE_TRANSFER_CUSTOMER, CREATE_TRANSFER_CUSTOMER_ERROR} from './types';
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
    })
  }
}



