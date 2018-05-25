import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import * as actions from '../../actions';
import UnitListItem from './unit_list_item';

class UnitList extends Component {

  componentDidMount = () => {
    this.props.fetchUnits(this.props.propertyData.property.id)
    console.log(this.props.propertyData)
            
  }
  
  renderList = () => {
    if(this.props.units) {
      const unitListItemsManaged = this.props.units.data.units_managed;
      const unitListItemsTenant = this.props.units.data.units_tenant;

      let unitList = [];
      

      unitList = unitListItemsManaged.map( unit => {
        console.log(unit)
        return (
          <UnitListItem item={unit}/>
          );          
      })
      
      return (unitList)
    

    }
  }
  

  render(){
    const property = this.props.propertyData.property
    
    return(
      
      <div className="col-md-offset-3 col-md-6">
        <h5>{`${property.street_number} ${property.route}, ${property.locality}, ${property.administrative_area_level_1} ${property.postal_code}`}</h5>
        {this.renderList()}
      </div> 
    );    
  }
}

function mapStateToProps(state) { 
  return { 
    units: state.units.units }; 
}

export default connect(mapStateToProps, actions)(UnitList);

