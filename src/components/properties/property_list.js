import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import * as actions from '../../actions';
import PropertyListItem from './property_list_item';

class PropertyList extends Component {

  componentDidMount(){
    this.props.fetchProperties()
  }
  
  render(){
    const propertyListItems = this.props.properties;
    let propertyList = [];
    
    if(propertyListItems) {
      console.log(propertyListItems)
      propertyList = propertyListItems.data.map( property => {
        return (
          <PropertyListItem property={property}  key={property.id}/>
          );          
      })
    }
    
    return(
      
      <div className="col-md-offset-3 col-md-6">
        <table className="table">
          <thead className="thead-inverse">
            <tr>
              <th>Address</th>
              <th>City, State</th>
              <th>Zip</th>
            </tr>
          </thead>
          <tbody>
            {propertyList}
          </tbody>
        </table>        
      </div> 
    );    
  }
}

function mapStateToProps(state) { 
  return { 
    properties: state.properties.properties }; 
}

export default connect(mapStateToProps, actions)(PropertyList);

