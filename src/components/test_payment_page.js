import React from 'react';
import { Link } from 'react-router-dom';
import {StripeProvider, Elements} from 'react-stripe-elements';
import {stripePublishableKey} from '../keys';

import MyStoreCheckout from '../components/card_payment/my_store_checkout';

const stripeApiKey= stripePublishableKey;


const TestPaymentPage = () => {
  return (
    <div>
      <p>Pay button on this page</p>
      <div>
        <StripeProvider apiKey={stripeApiKey}>
          <MyStoreCheckout />
        </StripeProvider>
      </div>
    </div>
    )
}

export default TestPaymentPage;

