import { combineReducers } from 'redux';
import propertyReducer from './property_reducer';

const rootReducer = combineReducers({

  properties: propertyReducer
  
});

export default rootReducer;
