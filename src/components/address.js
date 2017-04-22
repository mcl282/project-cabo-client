/*global google*/
import React, { Component } from 'react';
import MapComponent from './map';

class Address extends Component {
  constructor(props) {
    super(props);
      this.handlePlaceSubmit = this.handlePlaceSubmit.bind(this);
      this.state = {
        inputBar: "Enter your address",
        resultLatitude: null,
        resultLongitude: null,
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
        const resultLatitude = place.geometry.location.lat();
        const resultLongitude = place.geometry.location.lng();
        const placeId = place.place_id; 
        console.log(place);
        console.log(place.place_id);
        console.log(resultLatitude);
        console.log(resultLongitude);
        this.setState({ resultLatitude });
        this.setState({ resultLongitude });
        this.setState({ placeId });
        this.setState({placeLookUp: true});
      } else {
        console.log('waiting');
      }
      
  }
  
  render() {
    let showMap = null;
    if(this.state.placeLookUp){
      showMap =
        <div>
          <button className="btn btn-primary btn-lg btn-block">
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