import { UPLOAD_FILE, UPLOAD_FILE_ERROR } from '../actions/types';

export default function(state={}, action) {
  switch(action.type){
    case UPLOAD_FILE:
      return {...state, file_upload_success: action.payload};
    case UPLOAD_FILE_ERROR:
      return {...state, file_upload_error: action.payload};      
    // no default
  }
  return state;
}

