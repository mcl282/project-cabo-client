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


    if(this.props.data.transferSource) {
      let sourceData = this.props.data.transferSource.source;
      let sourceId = this.props.data.transferSource.transferSourceId;
      
      return(
        <div>
          <TransferSourceItem sourceData={sourceData} /> 
          <Button 
            className="btn btn-primary btn-sm"
            onClick={()=>this.handleupdateTransferSource({removed: true}, sourceId)}
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





