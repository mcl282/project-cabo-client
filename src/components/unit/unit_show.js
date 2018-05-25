import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions';
import UnitComponent from './unit_component'

class UnitShow extends Component {



  componentDidMount = () => {
    this.props.fetchUnit(this.props.match.params.id)
    
  }
  
  renderUnitComponent = (data) => {
    
    if (data){
    return (
      <div>
        <UnitComponent unitData={data}/>
      </div>
      )
    }
  }


  
  render() {

    const unitData = this.props.unit
    
    return (
      <div>
        {this.renderUnitComponent(unitData)}    
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    unit: state.units.unit
  };
}

export default connect(mapStateToProps, actions)(UnitShow);