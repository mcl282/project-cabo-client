import React, { Component } from 'react';
import { connect } from 'react-redux';
import PlaidLink from 'react-plaid-link';
import * as actions from '../../actions';

const plaidPublicKey = process.env.REACT_APP_PLAID_PUBLIC_KEY;

class PlaidAuthComponent extends Component {

  handleOnSuccess = (token, metadata) => {
    // send token to client server
    this.props.createTransferSource(metadata);  
  }
  
  
  
  render() {
    return (
      <div>
        <PlaidLink
          publicKey={`${plaidPublicKey}`}
          product={['auth']}
          env="sandbox"
          clientName="plaidname"
          selectAccount={true}
          onSuccess={this.handleOnSuccess}
          />
        {this.props.errorMessage}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.transfers.createTransferSourceError
  };
}

export default connect(mapStateToProps, actions)(PlaidAuthComponent);


