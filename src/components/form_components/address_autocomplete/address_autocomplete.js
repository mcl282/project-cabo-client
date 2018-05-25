/*global google*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import { Col, Form, FormGroup, Button } from 'reactstrap'


class Address extends Component {
  constructor(props) {
    super(props);
      this.state = {
        inputBar: "Enter your address",
        unitNamePlaceholder: "Add a unit number or skip",
        unitName: null,
        placeArray: [],
        googlePlaceId: null,
        placeLookUp: false
      }
    }
    
  componentDidMount() {
    this.initAutocomplete();
    
  }

  initAutocomplete() {
    this.autocomplete = new google.maps.places.Autocomplete((this.refs.autoCompletePlaces), {types: ['geocode']});

    this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
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
    if(e){
      e.preventDefault();
    } else {
      console.log('waiting for event');
    }
    const place = this.autocomplete.getPlace();
      if(place){
        this.props.createProperty({place, unitName: this.state.unitName}, this.props.callBack)
        
      } else {
        console.log('waiting');
      }
  }
  
  handlePlaceSelect = (e) => {
    e ? e.preventDefault() : '';
  }
  
  updateUnitName = (e) => {
    this.setState({unitName: e.target.value});
  }
  
  
  render() {
    
    return(
      <Col sm="12" md={{ size: 8, offset: 2 }}>
        <Form onSubmit={(e) => this.handlePlaceSelect(e)}>
          <FormGroup>
            <input 
              className="form-control"
              ref="autoCompletePlaces"
              type="text"
              placeholder={this.state.inputBar}
              onFocus={this.geolocate}
              />
          </FormGroup>
          <FormGroup>
            <input
              className="form-control"
              placeholder={this.state.unitNamePlaceholder}
              type="text"
              onChange={e => this.updateUnitName(e)}
            />
          </FormGroup>  
        </Form>
            <Button 
              color="primary"
              onClick={(e) => this.handlePlaceSubmit(e)} >
                Add Address
            </Button>        
        
      </Col>
    
    );
  }
}

export default connect(null, actions)(Address);