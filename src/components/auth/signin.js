import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { Link } from 'react-router-dom';

const renderInput = field => {
    const { input, type } = field;
    return (
        <div>
            <input {...input} type={type} className="form-control" />
        </div>
    );
}

class Signin extends Component {
    
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
  
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    console.log(values.email, values.password);
    
    this.props.signinUser(values, () => {
      this.props.history.push('/test');
    });
  }    


  renderAlert() {
    if(this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!  </strong>{this.props.errorMessage}
        </div>  
      )
    }
  }


  render(){
    
    const { handleSubmit } = this.props;
  
    return (
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Email:"
            name="email"
            type="email"
            component={this.renderField}
          /> 
          <Field
            label="Password:"
            name="password"
            type="password"
            component={this.renderField}
          /> 
          {this.renderAlert()}
          <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
    );
  }
  }

function validate(values) {
  
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.email) {
    errors.email = "Enter an email";
  }
  if (!values.password) {
    errors.password = 'Enter a password';
  }

  return errors;
}

function mapStateToProps(state) {
  // form: state.form,
  return { errorMessage: state.auth.error };
  }




export default reduxForm({
  validate,
  form: 'signin'
})(
  connect(mapStateToProps, actions)(Signin)
);