/*global google*/
import React, { Component } from 'react';
import MapComponent from './map';

class Address extends Component {
  constructor(props) {
    super(props);
      this.handlePlaceSubmit = this.handlePlaceSubmit.bind(this);
      this.state = {
        inputBar: "Enter your address",
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

  
  handlePlaceSubmit(e) {
    if(e){
      e.preventDefault();
    } else {
      console.log('waiting for event');
    }
    const place = this.autocomplete.getPlace();
      if(place){
        const placeId = place.place_id; 
        this.setState({ placeArray: place.address_components })
        this.setState({ placeId });
        this.setState({placeLookUp: true});
        console.log(this.state.placeArray[0].short_name)
      } else {
        console.log('waiting');
      }
  }
  
  
  render() {
    let showMap = null;
    if(this.state.placeLookUp){
      showMap =
        <div>
          <button 
            className="btn btn-primary btn-lg btn-block"
            onSubmit={this.handleSubmit}
            >
            This is me!
          </button>
          <MapComponent
            placeId={this.state.placeId}
            zoom={14}
          />       
        </div>

    }
    
    return(
      <div className="col-md-6 col-md-offset-3">
        <form onSubmit={this.handlePlaceSubmit}>
          <input 
            className="form-control"
            ref="autoCompletePlaces"
            type="text"
            placeholder={this.state.inputBar}
            onFocus={this.geolocate}
            />
        </form>
        {showMap}
      </div>
    );
  }
}

export default Address;