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

class RequestPasswordReset extends Component {
    
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

  onSubmit(email) {
    
    this.props.requestPasswordReset(email, () => {
      this.props.history.push('/test');
    });
  }    


  renderAlert() {
    if(this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops! </strong> {this.props.errorMessage}
        </div>  
      )
    }
  }


  render(){
    
    const { handleSubmit } = this.props;
  
    return (
        <div>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
              label="Please enter email:"
              name="email"
              type="email"
              component={this.renderField}
            /> 
            {this.renderAlert()}
            <button type="submit" className="btn btn-primary">Request password reset</button>
          </form>
        </div>
    );
  }
  }

function validate(values) {
  
  const errors = {};

  // Validate the inputs from 'values'
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
  form: 'requestPasswordReset'
})(
  connect(mapStateToProps, actions)(RequestPasswordReset)
);