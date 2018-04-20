import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function(ComposedComponent) { //ComposedComponent is convention
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object  //can only access properties on context when we've declared the need for that particular property ahead of time.  Static defines a class level property (not an instance), gives any other 
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.history.push('/signin');//
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.props.history.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}