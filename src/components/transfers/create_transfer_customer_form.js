import React, { Component } from 'react';
import { connect } from 'react-redux'
// eslint-disable-next-line
import { Field, reduxForm, initialize } from 'redux-form';
import * as actions from '../../actions';

class CreateTransferCustomer extends Component {
  

  componentDidMount() {
    this.props.fetchUser();
  }
  
  componentDidUpdate(prevProps){
    if(
      this.props.user !== prevProps.user
      ){
      this.handleInitialize()
    }
    

  }
  
  handleInitialize() {
    const initData = {
      "firstName": this.props.user.first_name,
      "lastName": this.props.user.last_name,
      "email": this.props.user.email
    }; 
    this.props.initialize(initData);
    
  }


  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          value={field.value}
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }  

  onSubmit(values) {
    this.props.createTransferCustomer(values, () => {
      this.props.history.push('/create-transfer-source');
    });
  }  
  

  
  renderAlert() {
    if(this.props.errorMessage) {
      return(
        <div className="alert alert-danger">
          <strong>Ooops!</strong> {this.props.errorMessage}
        </div>
      )
    }
  }

  render() {
  const { handleSubmit } = this.props;
  
    if(!this.props.user) {
      return (
        <div>
        </div>
      )} else {
      return (
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="First Name"
            name="firstName"
            type="text"
            component={this.renderField}
          />        
          <Field
            label="Last Name"
            name="lastName"
            type="text"
            component={this.renderField}
          /> 
          <Field
            label="Email"
            name="email"
            type="email"
            component={this.renderField}
          />
          {this.renderAlert()}
          <button type="submit" className="btn btn-primary">Create Transfer Customer</button>
        </form>
      );
    }
  }
}

function validate(values) {
  const errors ={};
    
    if(!values.firstName) {
      errors.firstName = 'Please enter your first name'
    }
    if(!values.lastName) {
      errors.lastName = 'Please enter your last name'
    }
    if(!values.email) {
      errors.email = 'Please enter an email'
    }
    
  return errors;
}



function mapStateToProps(state) {
  return {
    user: state.user.userInfo,
    errorMessage: state.transfers.createTransferCustomerError
  };
}


export default reduxForm({
  validate,
  form: 'createTransferCustomer'
})(
  connect(mapStateToProps, actions)(CreateTransferCustomer)
);
