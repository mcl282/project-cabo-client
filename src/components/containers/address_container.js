import React, { Component } from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import Address from '../address';


class AddressContainer extends Component {
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
    <div>
      <Address />
    </div>
        
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(AddressContainer)

