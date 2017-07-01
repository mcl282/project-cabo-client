import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxThunk from 'redux-thunk';

import App from './App';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import ReqeustPasswordReset from './components/auth/request_password_reset';
import PasswordReset from './components/auth/password_reset';
import AddressContainer from './components/containers/address_container';
import PropertyList from './components/property_list';
import TestComponent from './components/test';
import './index.css';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/request-password-reset" component={ReqeustPasswordReset} />
          <Route path="/password-reset/:resetToken/:email" component={PasswordReset} />
          <Route path="/address" component={AddressContainer} />
          <Route path="/property-list" component={PropertyList} />
          <Route path="/test" component={TestComponent} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>  
  ,
  document.getElementById('root')
);





