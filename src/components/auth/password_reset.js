import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';

class PasswordReset extends Component {
    
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

  onSubmit(password) {
    const email = this.props.match.params.email;
    const resetToken = this.props.match.params.resetToken;
    
    this.props.resetPassword(email, password, resetToken, () => {
      this.props.history.push('/test-protected');
    });
  }    


  renderAlert() {
    if(this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops! </strong> {this.props.errorMessage.info}
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
              label="Please enter a new password:"
              name="password"
              type="password"
              component={this.renderField}
            /> 
            {this.renderAlert()}
            <button type="submit" className="btn btn-primary">Update password</button>
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
  form: 'passwordReset'
})(
  connect(mapStateToProps, actions)(PasswordReset)
);