import axios from 'axios';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, SUBMIT_ADDRESS, FETCH_PROPERTIES } from './types';
import {auth_header} from './auth_header'

export * from './stripe_actions';

let ROOT_URL = "";
const API_VERSION = process.env.REACT_APP_ROOT_URL_API_VERSION;

if(process.env.NODE_ENV==='development') {
  ROOT_URL=process.env.REACT_APP_ROOT_URL_DEV;
} else {
  ROOT_URL=process.env.REACT_APP_ROOT_URL_PROD;
}

export const ROOT_URL_VERSION = `${ROOT_URL}/${API_VERSION}`;

export function signinUser(values, callback) {
  const email = values.email;
  const password = values.password;
  
  return function(dispatch){
    
  //submit email password to the server
  axios.post(`${ROOT_URL}/user_token.json`, { auth: { email, password } })
    .then(response => {
      //if request is good, update state to indicate user is authenticated
      dispatch({ type: AUTH_USER});
      //-save the jwt token
      localStorage.setItem('jwt', response.data.jwt);
      console.log(response.data);
    })
    .then(() => callback())
    .catch( error => {
    //if request is bad, show an error to the user
    console.log(error);
    dispatch(authError(error));
    })
  
  };
  
}
export function signoutUser() {
  localStorage.removeItem('jwt');
  return {type: UNAUTH_USER }
}

export function authError(error) {
  return {
    type: AUTH_ERROR, 
    payload: error
  }  
}

export function signupUser(values, callback) {
  const email = values.email;
  const password = values.password;
  
  return function(dispatch) {
    axios.post(`${ROOT_URL}/users.json`, {user: {email, password}})
      .then(response => {
        console.log(response);
        dispatch({ type: AUTH_USER});
        localStorage.setItem('jwt', response.data.jwt);
      })
      .then()
      .then(() => callback())
      .catch(({ response }) => {
        dispatch(authError(response.data));
      });
  };
}

export function requestPasswordReset(email, callback){
  return function(dispatch){
    signoutUser();
    axios.post(`${ROOT_URL}/password_resets.json`, email)
      .then(() => callback())
      .catch(({ response }) => {
        dispatch(authError(response.data.info));
      });
  };
}


export function resetPassword(email, password, resetToken, callback) {
  return function(dispatch){
    axios.patch(`${ROOT_URL}/password_resets/${resetToken}.json`, {email: email, newPassword: password})
    .then( response => {
      dispatch({ type: AUTH_USER});
      localStorage.setItem('jwt', response.data.jwt);
    })
    .then(() => callback())
    .catch(({ response }) => {
      dispatch(authError(response.data))
    });
  }
}

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
