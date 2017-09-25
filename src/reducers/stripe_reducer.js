import { CREATE_STRIPE_CHARGE, STRIPE_CHARGE_ERROR, FETCH_STRIPE_CHARGES } from '../actions/types';

export default function(state={}, action) {
  switch(action.type){
    case CREATE_STRIPE_CHARGE:
      return {...state, error: '', stripe_successful_charge: action.payload};
    case STRIPE_CHARGE_ERROR:
      return {...state, error: action.payload, stripe_successful_charge: false};      
    case FETCH_STRIPE_CHARGES:
      return {...state, stripeCharges: action.payload.data};      
      
  }
  return state;
}