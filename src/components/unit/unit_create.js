import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions';
import { Container, Form, FormGroup, Label, Input} from 'reactstrap'


class CreateUnit extends Component {

  
  render() {
    
    return (
      <div>
        <Container>
        <Form >
          <FormGroup>
            <Input placeholder="create a nickname for your property or add a unit number" />
          </FormGroup>
        </Form>
        </Container>
      </div>
    );
  }
}



function mapStateToProps(state) {
  return {
    property: state.properties.property
  };
}


export default connect(mapStateToProps, actions)(CreateUnit);

