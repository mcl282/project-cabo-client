import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Input } from 'reactstrap';
import * as actions from '../../actions';

class AddUnitModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false, 
      unitName: null
    };

  }


  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }
  
  updateUnitName = (e) => {
    this.setState({unitName: e.target.value});
  }

  handleSubmit = () => {
    const unitName = this.state.unitName
    const unitId = this.props.unitId
    
    this.props.updateUnitName({unit_name: unitName}, unitId)
  }
  
  
  render() {
    return (
      <div>
        <Button color="link" size="sm" onClick={this.toggle}>Add Unit</Button>
          <Form >        
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>Add a unit number</ModalHeader>
              <ModalBody>
                <Input 
                  autofocus="true"
                  name="unitNameInput"
                  type="text"
                  onChange={e => this.updateUnitName(e)}/>
              </ModalBody>
              <ModalFooter>
                <Button type="submit" color="primary" onClick={this.handleSubmit} >Update</Button>
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
            </Modal>
          </Form>            
      </div>
    );
  }
}

export default connect(null, actions)(AddUnitModal);