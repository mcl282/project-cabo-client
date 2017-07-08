import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
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
    this.props.signupUser(values, () => {
      this.props.history.push('/test-protected');
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
    
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Email"
          name="email"
          type="email"
          component={this.renderField}
        />        
        <Field
          label="Password"
          name="password"
          type="password"
          component={this.renderField}
        /> 
        <Field
          label="Password Confirmation"
          name="passwordConfrm"
          type="password"
          component={this.renderField}
        />
        {this.renderAlert()}
        <button type="submit" className="btn btn-primary">Sign Up</button>
      </form>
    );
  }
}

function validate(values) {
  const errors ={};
    
    if(!values.email) {
      errors.email = 'Please enter an email'
    }
    if(!values.password) {
      errors.password = 'Please enter a password'
    }
    if(!values.passwordConfirm) {
      errors.passwordConfirm = 'Please enter a password confirmation'
    }
    
    if(values.password !== values.passwordConfirm) {
      errors.passwordConfirm = 'Passwords must match!';
    }
    
  return errors;
}


function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error
  };
}


export default reduxForm({
  validate,
  form: 'signup'
})(
  connect(mapStateToProps, actions)(Signup)
);