import React, { Component } from 'react';
import { connect } from 'react-redux'
import {injectStripe} from 'react-stripe-elements';
import * as actions from '../../actions';
import { withRouter } from 'react-router-dom';
import { Button, FormGroup, Col, Row, Alert } from 'react-bootstrap';

// import AddressSection from './AddressSection'; <AddressSection />
import CardSection from './card_section';

import './stripe.css'

class CheckoutForm extends Component {
  
  handleSubmit = (ev) => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();

    // Within the context of `Elements`, this call to createToken knows which Element to
    // tokenize, since there's only one in this group.
    this.props.stripe.createToken().then(({token}) => {
      console.log('Received Stripe token:', token);
      this.props.createStripeCharge(
        token, 
        50, 
        () => {this.props.history.push('/test')})
    });

    // However, this line of code will do the same thing:
    // this.props.stripe.createToken({type: 'card', name: 'Jenny Rosen'});
  }
  
  renderError = () =>{
    if(this.props.errorMessage){
      return(
        <div>
          <Alert bsStyle="danger">
            <strong>Oh snap!</strong> {this.props.errorMessage}
          </Alert>  
        </div>        
      )
    }
  }

  render() {
    return (
      <div>
        <Row>
          <div>
            <form
              onSubmit={this.handleSubmit}>
              <FormGroup>
                <CardSection />
              </FormGroup>
              <FormGroup>
                <Col lg={4} lgOffset={4} >
                  <Col lg={10} lgOffset={1} >
                    <Button bsStyle="primary" bsSize="large" block type="submit">Confirm order</Button>
                  </Col>
                </Col>
              </FormGroup>
            </form>
          </div>
        </Row>
        <br/>
        <Row>
        <Col lg={4} lgOffset={4} >
          {this.renderError()}
        </Col>
      </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.stripe.error    
  };
}

export default withRouter(injectStripe(connect(mapStateToProps, actions) (CheckoutForm)));