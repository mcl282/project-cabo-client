import React, { Component } from 'react';

class Address extends Component {
  
  render() {
    return(
      <div className="input-group col-md-4 col-md-offset-4">
        <input 
          className="form-control"
          ref="autoCompletePlaces"
          type="text"
          placeholder="Enter your address"
          /*onFocus={this.geolocate}*/
          />
      </div>
    );
  }
}

export default Address;