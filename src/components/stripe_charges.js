import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import * as actions from '../actions';
import {ListGroup} from 'reactstrap';
import StripeChargeItem from './stripe_charge_item';

class stripeCharges extends Component {

  componentWillMount(){
    this.props.fetchStripeCharges();
  }
  
  render(){
    const chargeData = this.props.data; 
    let chargeList = []

    if(chargeData){
      chargeList = chargeData.map( charge => {
        console.log(charge);
        return (
          <StripeChargeItem charge={charge} key={charge.id}/>
          );          
      })
    }

    return( 
      <div>
        <ListGroup>
          {chargeList}
        </ListGroup>
      </div>
    );
  }
}

function mapStateToProps(state) { 
  return {
    data: state.stripe.stripeCharges
  }; 
}

export default connect(mapStateToProps, actions)(stripeCharges);





