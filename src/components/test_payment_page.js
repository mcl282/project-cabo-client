import React from 'react';
import { Link } from 'react-router-dom';
import {StripeProvider, Elements} from 'react-stripe-elements';


import MyStoreCheckout from '../components/card_payment/my_store_checkout';

const stripeApiKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;


const TestPaymentPage = () => {
  console.log(stripeApiKey);
  return (
    <div>
      <div>
        <StripeProvider apiKey={`${stripeApiKey}`}>
          <MyStoreCheckout />
        </StripeProvider>
      </div>
    </div>
    )
}

export default TestPaymentPage;

