import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { Button } from 'react-bootstrap';
import * as actions from '../../actions';
import TransferSourceItem from './transfer_source_item';


class TransferAccounts extends Component {

  componentDidMount = () => {
    this.props.fetchTransferSource();
  }

  renderAccountItem = () => {

    let renderAccountItem = 
      this.props.data.transferSource && 
      this.props.data.transferSource !== null &&
      !this.props.data.removed  ? true : false;
    

    console.log(this.props.data.transferSource)
    if(renderAccountItem) {
      
      let fundingSourceData = this.props.data.transferSource;
      let userId = this.props.data.transferSource.user;
      
      return(
        <div>
          <TransferSourceItem fundingSourceData={fundingSourceData} /> 
          <Button 
            className="btn btn-primary btn-sm"
            onClick={()=>this.handleupdateTransferSource({removed: true}, userId)}
            >
              Unlink Account
          </Button>
        </div>
      );
    } 
  };
  
  handleupdateTransferSource = (values, id) => {
    this.props.updateTransferSource(values, id);
    console.log(values, id);
  }

  render(){
    
    return( 
      <div>
        {this.renderAccountItem()}
      </div>
    );
  }
}

function mapStateToProps(state) { 
  return {
    data: state.transfers
  }; 
}

export default connect(mapStateToProps, actions)(TransferAccounts);





