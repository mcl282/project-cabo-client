/*global google*/
import React, { Component } from 'react';

const MapComponent = ({ placeId, zoom }) => {

  
  const key = 'AIzaSyAnhYQqHo2V5AcFpcKKPX6rz0bVrw7xmZg';
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
