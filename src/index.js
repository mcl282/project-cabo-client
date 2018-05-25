import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxThunk from 'redux-thunk';

import App from './App';
import Header from './components/header';
import Welcome from './components/welcome';
import Signin from './components/auth/signin';
import Signup from './components/auth/signup';
import Signout from './components/auth/signout';
import RequireAuth from './components/auth/require_auth';
import ReqeustPasswordReset from './components/auth/request_password_reset';
import PasswordReset from './components/auth/password_reset';
import AddressContainer from './components/containers/address_container';
import TestComponent from './components/test';
import TestProtectedComponent from './components/test_protected';
import TestPaymentPage from './components/test_payment_page';
import Charges from './components/stripe_charges';
import CreateTransferCustomer from './components/transfers/create_transfer_customer_form';
import TransferAccountForm from './components/transfers/transfer_account_form';
import TransferAccountInfo from './components/transfers/transfer_account_info';
import VerifyCustomerAddress from './components/transfers/verify_customer_address_form';
import TransferSource from './components/transfers/transfer_account_form';
import CreateProperty from './components/properties/property_create';
import PropertyList from './components/properties/property_list';
import CreateUnit from './components/unit/unit_create';
import ShowUnit from './components/unit/unit_show';
import PropertyShow from './components/properties/property_show';

import './index.css';
import reducers from './reducers';
import { AUTH_USER } from './actions/types';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers)

const token = localStorage.getItem('jwt');
//if we have a token, consider the user to be signed in 

if(token){
  //we need to update the application state
  store.dispatch({ type: AUTH_USER });
};

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <App />
        <Header/>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path="/signup" component={Signup} />
          <Route path="/signin" component={Signin} />
          <Route path="/signout" component={Signout} />
          <Route path="/request-password-reset" component={ReqeustPasswordReset} />
          <Route path="/password-reset/:resetToken/:email" component={PasswordReset} />
          <Route path="/address" component={AddressContainer} />
          <Route path="/test" component={TestComponent} />
          <Route path="/test-protected" component={RequireAuth(TestProtectedComponent)} />
          <Route path="/payment-page" component={TestPaymentPage} />
          <Route path="/charges" component={Charges} />
          <Route path="/create-transfer-customer" component={CreateTransferCustomer} />
          <Route path="/verify-transfer-customer" component={VerifyCustomerAddress} />
          <Route path="/create-transfer-source" component={TransferAccountForm} />
          <Route path="/transfer-account-info" component={TransferAccountInfo} />
          <Route path="/transfer-source" component={TransferSource} />
          <Route path="/create-property" component={CreateProperty} />
          <Route path="/create-unit" component={CreateUnit} />
          <Route path="/units/:id" component={ShowUnit} />
          <Route exact path="/properties" component={PropertyList} />
          <Route path="/properties/:id" component={PropertyShow} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>  
  ,
  document.getElementById('root')
);





