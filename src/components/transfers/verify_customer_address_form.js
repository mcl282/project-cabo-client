/*global google*/
import React, { Component } from 'react';
import Script from 'react-load-script'
import { connect } from 'react-redux'
import { Col, Row, Button, FormGroup} from 'react-bootstrap';
import * as actions from '../../actions';

class VerifyCustomerAddress extends Component {
  constructor(props) {
    super(props);
      this.state = {
        placeArray: [],
        address2: null,
        googlePlaceId: null
      }
    }  

  handleScriptLoad = () => {
    this.initAutocomplete();
  }
  
   
  initAutocomplete = () => {
    this.autocomplete = new google.maps.places.Autocomplete((this.refs.autoCompletePlaces), {types: ['geocode']});

    this.autocomplete.addListener('place_changed', this.handlePlaceSubmit);
  }
  
  geolocate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        // eslint-disable-next-line
        const geolocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
  }  

  
  handlePlaceSubmit = (e) => {
    const place = this.autocomplete.getPlace();
      if(place){
        this.setState({placeArray: place.address_components});
      } 
  }
  
  handleFormSubmit = (event) => {
    event.preventDefault()
    const data = {
      data: {placeArray: this.state.placeArray, 
            address2: this.state.address2, 
            googlePlaceId: this.state.googlePlaceId}
    } 
    console.log(data)
    this.props.verifyCustomerInfo(data)
  }
  
  handleChange = (event) => {
    this.setState({address2: event.target.value});
  }  
  
  render() {
    const googleApiKey = process.env.REACT_APP_GOOGLE_API_KEY;
    if(googleApiKey){
    return(
      <div>
        <Script
          url={`https://maps.googleapis.com/maps/api/js?key=${googleApiKey}&libraries=places`}
          onLoad={this.handleScriptLoad}
        />
        <Row>
          <Col md={4} lgOffset={4} >
            <form onSubmit={this.handleFormSubmit}>
              <FormGroup>
                
                <input 
                  className="form-control"
                  ref="autoCompletePlaces"
                  type="text"
                  placeholder="Enter your address"
                  onFocus={this.geolocate}
                  />
              </FormGroup> 
  
              <FormGroup> 
                <input
                  className="form-control"
                  type="text"
                  placeholder="Apartment / Unit Number"
                  onChange={this.handleChange}
                />
              </FormGroup>     

              <FormGroup>
                <input
                  className="form-control"
                  type="date"
                  placeholder="Date of Birth"
                  onChange={this.handleChange}
                />
              </FormGroup>         
               
              <FormGroup>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Last 4 Digits of SSN"
                  onChange={this.handleChange}
                />
              </FormGroup> 
              <FormGroup>
                <Button
                  bsStyle="primary"
                  type="submit"
                  block
                  >
                  Verify Account
                </Button>
              </FormGroup> 
              
            </form>
          </Col>
        </Row>
      </div>
    );
    }
  }
}

export default connect(null, actions)(VerifyCustomerAddress);