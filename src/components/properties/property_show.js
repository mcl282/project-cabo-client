import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions';
import { Col, Form, FormGroup, Button } from 'reactstrap'
import PropertyComponent from './property_component'
import CreateUnit from '../../components/unit/unit_create'
import UnitComponent from '../../components/unit/unit_component'
import UnitList from '../../components/unit/unit_list'



class PropertyShow extends Component {
  constructor(props) {
    super(props);
      this.state = {
        unitCount: 0
      }
    }


  componentDidMount = () => {
    this.props.fetchProperty(this.props.match.params.id)
  }
  
  renderPropertyComponent = (propertyData) => {
    
    if (propertyData){
    return (
      <div>
        <PropertyComponent propertyData={propertyData.data.property}/>
      </div>
      )
    }
  }


  
  renderUnitOrList = (propertyData) => {
    
    if (propertyData){
      const unitData = propertyData.data.units[0]  
      console.log(propertyData)
      
      if(this.props.property.data.units.length > 1) {
        
        return (
          <div>
            <UnitList 
              propertyId={propertyData.data.property.id}
              propertyData={propertyData.data}/>
          </div>
          )
          
      } else {
        console.log(unitData)
        return (
          <div>
            <UnitComponent 
            propertyData={propertyData.data.property}
            unitData={unitData}/>
          </div>
          )        
      
        
      }

    }    
  }  
  
  render() {

    const propertyData = this.props.property
  
    return (
      <div>
      <Col xs="6">
        {this.renderPropertyComponent(propertyData)}
      </Col>
        <CreateUnit/>
        {this.renderUnitOrList(propertyData)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    property: state.properties.property
  };
}

export default connect(mapStateToProps, actions)(PropertyShow);