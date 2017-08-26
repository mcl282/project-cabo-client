import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {   Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { connect } from 'react-redux';


class Header extends Component {

  handleSignout = () => {
    this.props.history.push('/signout');
  }  
  
  handleSignin = () => {
    this.props.history.push('/signin');
  }  
  
  handleSignup = () => {
    this.props.history.push('/signup');
  }  
  
  renderSignout = () => {
    if(this.props.authenticated){
      return(
        <NavItem eventKey={4}  onSelect={this.handleSignout}>Signout</NavItem>
        );
    }
  } 
  renderSignin = () => {
    if(!this.props.authenticated){
      return(
        <NavItem eventKey={5}  onSelect={this.handleSignin}>Signin</NavItem>
        );
    }
  }   

  renderSignup = () => {
    if(!this.props.authenticated){
      return(
        <NavItem eventKey={6}  onSelect={this.handleSignup}>Signup</NavItem>
        );
    }
  }   
   render() {
    
      return (
        <Navbar fluid={true}>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Project Cabo</Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
            </NavDropdown>
            {this.renderSignout()}
            {this.renderSignin()}
            {this.renderSignup()}
          </Nav>
        </Navbar>
      );
    }
}

function mapStateToProps(state) {
  // form: state.form,
  return { authenticated: state.auth.authenticated };
  }

export default connect(mapStateToProps)(withRouter(Header))


