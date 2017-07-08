import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {   Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


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
            <NavItem eventKey={4}  onSelect={this.handleSignout}>Signout</NavItem>
            <NavItem eventKey={5}  onSelect={this.handleSignin}>Signin</NavItem>
            <NavItem eventKey={6}  onSelect={this.handleSignup}>Signup</NavItem>
          </Nav>
        </Navbar>
      );
    }
}

export default withRouter(Header);


