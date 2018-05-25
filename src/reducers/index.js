import { combineReducers } from 'redux';
import auth from './auth_reducer';
import userReducer from './user_reducer';
import propertyReducer from './property_reducer';
import stripeReducer from './stripe_reducer';
import transferReducer from './transfer_reducer';
import files from './file_upload_reducer';
import units from './unit_reducer';

import { reducer as form } from 'redux-form';

/* const rootReducer = combineReducers({
  form,
  auth,
  properties: propertyReducer,
  stripe: stripeReducer
  
}); */



const appReducer = combineReducers({
  /* your app’s top-level reducers */
  form,
  auth,
  user: userReducer,
  properties: propertyReducer,
  units,
  stripe: stripeReducer,
  transfers: transferReducer,
  files: files
})

const rootReducer = (state, action) => {
  if (action.type === 'UNAUTH_USER') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer; 