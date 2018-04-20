import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dropzone from 'react-dropzone'
import * as actions from '../../actions';
import style from './dropzone.css.js'
import { Button, Form } from 'reactstrap'
import Octicon from 'react-octicon'

class DropZone extends Component {

  constructor(props) {
    super(props);
    this.state = {
      files: []
      
    };
  }


  onDrop = (files) =>{
    console.log(files);

    //https://stackoverflow.com/questions/42207865/unable-to-setstate-to-react-component
    this.setState({
      files: files
    })
    //this.props.uploadFile(files)
    
    
  }
  
  onFileUpload = () => {
    this.props.uploadFile(this.state.files)
  }
  
  clearFile = () => {
    this.setState({
      files: []
    })
  }
  
  renderFileData = () => {
    if(this.state.files.length >0){
    return(
      <div>
        <Button color='link' onClick={() => this.clearFile()}><Octicon name="x"/></Button>
        <a href={this.state.files[0].preview}
           target='_blank'>
           {this.state.files[0].name}</a>
                     
       </div>
      )
    }
  }

  render () {
    return (
      <div>
        <Form>
          <Dropzone 
            onDrop={(files) => this.onDrop(files)} style={style}>
              <div>
                Drop files here or click to upload.
              </div>
          </Dropzone>
          <p>{this.renderFileData()}</p>
          <Button 
            color="primary"
            onClick={() => this.onFileUpload()}
            >Save file</Button>
        </Form>  
      </div>
    );
  }
}



export default connect(null, actions)(DropZone);






