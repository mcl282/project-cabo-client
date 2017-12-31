import React, {Component} from 'react';
import  PlaidAuthComponent from './plaid_auth_component';

class TransferSourceForm extends Component {
  render() {
    return (
      <div>
        <PlaidAuthComponent />
      </div>
      )
  }
}


export default TransferSourceForm;

