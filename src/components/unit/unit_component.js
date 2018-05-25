import React, { Component } from 'react';
import AddUnitModal from './unit_add_unit_name'

class UnitComponent extends Component {
 
  renderUnitName = (unitData) => {

    const unitName = unitData.unit_name
    const unitId = unitData.id
    
    if(unitName){
      return(
        <div>
          <p>{unitName}</p>
          <AddUnitModal unitId={unitId}/>
        </div>
      )
    } else {

      return (
        <div>
          <AddUnitModal unitId={unitId}/>
        </div>
      )
        
    }
    
  } 
  
  render() {
    const propertyData = this.props.propertyData
    const unitData = this.props.unitData
  
    return (
      <div>
        <h5>{`${propertyData.street_number} ${propertyData.route}, ${propertyData.locality}, ${propertyData.administrative_area_level_1} ${propertyData.postal_code}`}</h5>    
        {this.renderUnitName(unitData)}
      </div>
    );
  }
}



export default UnitComponent;