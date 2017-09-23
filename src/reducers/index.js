import { combineReducers } from 'redux';
import auth from './auth_reducer';
import propertyReducer from './property_reducer';
import stripeReducer from './stripe_reducer';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  form,
  auth,
  properties: propertyReducer,
  stripe: stripeReducer
  
});

export default rootReducer;
