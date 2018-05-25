import { 
  CREATE_PROPERTY, 
  CREATE_PROPERTY_ERROR,
  FETCH_PROPERTIES, 
  FETCH_PROPERTY,
  FETCH_ZPID } from '../actions/types';

export default function(state={}, action) {
  switch(action.type){
    case CREATE_PROPERTY:
      return {...state, create_property_success: action.payload};    
    case CREATE_PROPERTY_ERROR:
      return {...state, create_property_error: action.payload};    
    case FETCH_PROPERTY:
      return {...state, property: action.payload};    
    case FETCH_PROPERTIES:
      return {...state, properties: action.payload};
    case FETCH_ZPID:
      return {...state, zpid: action.payload};  
    // no default
  }
  return state;
}