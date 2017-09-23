import React, { Component } from 'react';
import {CardElement} from 'react-stripe-elements';
import './stripe.css'
import { Col } from 'react-bootstrap';

class CardSection extends Component {
  render() {
    return (

      <div className="container-fluid">
        <Col xs={4} xsOffset={4} > 
          <Col xs={10} xsOffset={1} >
          <CardElement className='StripeElement' style={{
            base: {
              iconColor: 'white',
              color: 'white',
              lineHeight: '40px',
              fontWeight: 300,
              fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
              fontSize: '15px',
            
              '::placeholder': {
                color: '#CFD7E0',
              }
            }
          }} />
          </Col>
        </Col>

      </div>


    );
  }
};

export default CardSection;