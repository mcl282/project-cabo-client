import { FETCH_USER } from '../actions/types';

export default function(state={}, action) {
  switch(action.type){
    case FETCH_USER:
      return {...state, userInfo: action.payload.data};
    default: return state;
  }
}