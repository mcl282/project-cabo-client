import axios from 'axios';
import { CREATE_STRIPE_CHARGE, STRIPE_CHARGE_ERROR } from './types';
import { ROOT_URL_VERSION } from './index.js';

const jwt = localStorage.getItem('jwt');

const auth_header = { 'Authorization': `Bearer + ${jwt}`};


export const createStripeCharge = (stripeToken, amount, callback) => {
  return function (dispatch){
    
  axios({
    method : 'post',
    url: `${ROOT_URL_VERSION}/charges.json`, 
    data: { stripeToken, amount }, 
    headers: auth_header })
    .then(response => {
      console.log(response)
      dispatch({ 
        type: CREATE_STRIPE_CHARGE,
        payload: response
      });
    })
    .then(() => callback())
    .catch( error => {
    //if request is bad, show an error to the user
    console.log(error.response);
    dispatch({
      type: STRIPE_CHARGE_ERROR,
      payload: error.response.data
    });
    })
  }
}
