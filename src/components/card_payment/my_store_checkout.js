import React, { Component } from 'react';
import {Elements} from 'react-stripe-elements';

import CheckoutForm from './checkout_form';

class MyStoreCheckout extends Component {
  render() {
    return (
      <div>
        <Elements>
          <CheckoutForm />
        </Elements>
      </div>
    );
  }
}

export default MyStoreCheckout;