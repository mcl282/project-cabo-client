import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import * as actions from '../actions';
import PropertyListItem from './property_list_item';

class PropertyList extends Component {

  componentWillMount(){
    this.props.fetchProperties()
  }
  
  render(){
    const propertyListItems = this.props.data.properties;
    let propertyList = [];
    
    if(propertyListItems) {
      propertyList = propertyListItems.map( property => {
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

function mapStateToProps({ properties }) { 
  return { data: properties }; 
}

export default connect(mapStateToProps, actions)(PropertyList);

