import { 
  FETCH_UNIT, 
  FETCH_UNITS,
  CREATE_UNIT,
  CREATE_UNIT_ERROR, 
  UPDATE_UNIT_NAME
   } from '../actions/types';

export default function(state={}, action) {
  switch(action.type){
    case FETCH_UNIT:
      return {...state, unit: action.payload};
    case FETCH_UNITS:
      return {...state, units: action.payload};      
    case CREATE_UNIT:
      return {...state, createUnit: action.payload};    
    case CREATE_UNIT_ERROR:
      return {...state, createUnitError: action.payload};  
    case UPDATE_UNIT_NAME:
      return {...state, unit: action.payload};        
    // no default
  }
  return state;
}