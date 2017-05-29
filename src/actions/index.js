import axios from 'axios';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, SUBMIT_ADDRESS, FETCH_PROPERTIES } from './types';

const ROOT_URL = "";
const API_VERSION = process.env.REACT_APP_ROOT_URL_API_VERSION;

if(process.env.NODE_ENV==='development') {
  ROOT_URL=process.env.REACT_APP_ROOT_URL_DEV;
} else {
  ROOT_URL=process.env.REACT_APP_ROOT_URL_PROD;
}

const ROOT_URL_VERSION = `${ROOT_URL}/${API_VERSION}`;


export function signinUser(values, callback) {
  const email = values.email;
  const password = values. password;
  
  return function(dispatch){
    
  //submit email password to the server
  axios.post(`${ROOT_URL}/user_token.json`, { auth: { email, password } })
    .then(response => {
      //if request is good, update state to indicate user is authenticated
      dispatch({ type: AUTH_USER});
      //-save the jwt token
      localStorage.setItem('jwt', response.jwt);
      console.log(response.data);
    })
    .then(() => callback())
    .catch( error => {
    //if request is bad, show an error to the user
    dispatch(authError(error));
    })
  
  };
  
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
        dispatch({ type: AUTH_USER });
      })
      .then(
        axios.post(`${ROOT_URL}/user_token.json`, { auth: { email, password } })  
          .then(response => {
            //if request is good, update state to indicate user is authenticated
            dispatch({ type: AUTH_USER});
            //-save the jwt token
            localStorage.setItem('jwt', response.jwt);
            console.log(response.data);
          })        
        )
      .then(() => callback())
      .catch(({ response }) => dispatch(authError(response.data.error)));
  }
}

export function fetchProperties() {
  return function (dispatch){
    axios.get(`${ROOT_URL_VERSION}/properties`)
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
