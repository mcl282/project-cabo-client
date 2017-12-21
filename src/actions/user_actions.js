import axios from 'axios';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_USER } from './types';
import {auth_header} from './auth_header'
import {ROOT_URL_VERSION, ROOT_URL} from './index'



export function signinUser(values, callback) {
  const email = values.email;
  const password = values.password;
  
  return function(dispatch){
  //submit email password to the server
  axios.post(`${ROOT_URL}/user_token.json`, { auth: { email, password } })
    .then(response => {
      //if request is good, update state to indicate user is authenticated
      dispatch({ 
        type: AUTH_USER
      });
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
    axios.post(`${ROOT_URL_VERSION}/users.json`, {user: {email, password}})
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

export function fetchUser(email) {
  return function (dispatch){
    axios({
      method: 'GET',
      url:  `${ROOT_URL_VERSION}/users`, 
      headers: auth_header})
    .then(response => {
      console.log(response);
      dispatch({ 
        type: FETCH_USER,
        payload: response
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }
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

