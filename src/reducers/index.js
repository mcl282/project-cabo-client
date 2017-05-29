import { combineReducers } from 'redux';
import auth from './auth_reducer';
import propertyReducer from './property_reducer';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  form,
  auth,
  properties: propertyReducer
  
});

export default rootReducer;
