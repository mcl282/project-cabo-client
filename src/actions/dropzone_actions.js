import axios from 'axios';
import { UPLOAD_FILE, UPLOAD_FILE_ERROR } from './types';
import { ROOT_URL_VERSION } from './index.js';
import {auth_header} from './auth_header'




export const uploadFile = (files, callback) => {
  
  let fileData = new FormData()
  fileData.append('files', files[0])
  
  
  return function (dispatch){
    
  axios({
    method : 'POST',
    url: `${ROOT_URL_VERSION}/charges.json`, 
    data: fileData, 
    headers: auth_header 
  })
    .then(response => {
      console.log(response);
      dispatch({ 
        type: UPLOAD_FILE,
        payload: response
      });
    })
    .then(() => callback())
    .catch( error => {
    //if request is bad, show an error to the user
    console.log(error.response);
    dispatch({
      type: UPLOAD_FILE_ERROR,
      payload: error.response
    });
    })
  }
}
