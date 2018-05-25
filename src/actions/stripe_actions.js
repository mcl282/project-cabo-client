import axios from 'axios';
import { CREATE_STRIPE_CHARGE, STRIPE_CHARGE_ERROR, FETCH_STRIPE_CHARGES} from './types';
import { ROOT_URL_VERSION } from './index.js';
import {auth_header} from './auth_header'

const stripeApiUrl = "https://api.stripe.com/v1"

const stripeSk = process.env.REACT_APP_STRIPE_SECRET_KEY;


const stripeConfig = { 'Authorization': `Bearer ${stripeSk}`};

export const createStripeCharge = (stripeToken, amount, callback) => {
  return function (dispatch){
    
  axios({
    method : 'POST',
    url: `${ROOT_URL_VERSION}/charge.json`, 
    data: { stripeToken, amount }, 
    headers: auth_header 
  })
    .then(response => {
      console.log(response);
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

export const fetchStripeCharges = (stripeSecretKey) => {
  return function(dispatch){
    axios({
      method: 'GET',
      url: `${stripeApiUrl}/charges`, 
      headers: stripeConfig
    })
    .then(response => {
      dispatch({
        type:FETCH_STRIPE_CHARGES,
        payload: response.data
      })
    })
  }  
}

