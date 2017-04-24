import { FETCH_PROPERTIES, FETCH_ZPID } from '../actions/types';

export default function(state={}, action) {
  switch(action.type){
    case FETCH_PROPERTIES:
      return {...state, properties: action.payload};
    case FETCH_ZPID:
      return {...state, zpid: action.payload};      
  }
  return state;
}