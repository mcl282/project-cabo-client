/*global google*/
import React, { Component } from 'react';
import { googleApiKey } from '../keys';

const MapComponent = ({ placeId, zoom }) => {

  
  const key = googleApiKey;
  const root = 'https://www.google.com/maps/embed/v1/' 
    return(
      <div className="jumbotron">
        <iframe 
        style={{border: 'none'}}
        width="800" 
        height="450"
        src={`${root}place?key=${key}&zoom=${zoom}&q=place_id:${placeId}`} allowFullScreen></iframe>
      </div> 
    );
}

export default MapComponent;
