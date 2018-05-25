import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions';
import { Container} from 'reactstrap'
import AddressContainer from '../form_components/address_autocomplete/address_autocomplete_container';



class CreateUnit extends Component {
  
  render() {
    
    const nextPage = (id) => {this.props.history.push(`/properties/${id}`)};
    
    return (
      <div>
        <Container>
          <AddressContainer 
            callBack={nextPage}/>
        </Container>
      </div>
    );
  }
}


export default connect(null, actions)(CreateUnit);