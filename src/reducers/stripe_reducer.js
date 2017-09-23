import { CREATE_STRIPE_CHARGE, STRIPE_CHARGE_ERROR } from '../actions/types';

export default function(state={}, action) {
  switch(action.type){
    case CREATE_STRIPE_CHARGE:
      return {...state, error: '', stripe_successful_charge: action.payload};
    case STRIPE_CHARGE_ERROR:
      return {...state, error: action.payload, stripe_successful_charge: false};      
  }
  return state;
}