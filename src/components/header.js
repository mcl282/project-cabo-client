import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  Navbar, 
  NavbarBrand, 
  Nav, 
  NavLink, 
  DropdownToggle, 
  UncontrolledDropdown, 
  DropdownItem, 
  DropdownMenu } from 'reactstrap';
import { connect } from 'react-redux';


class Header extends Component {


  handleSelect = (value) => {
    console.log(value)
    this.props.history.push(`/${value}`);
  }    
  
  
  renderSignout = () => {
    if(this.props.authenticated){
      return(
        <DropdownItem 
          tag={Link} to="/signout">
            Signout
        </DropdownItem>
        );
    }
  } 
  renderSignin = () => {
    if(!this.props.authenticated){
      return(
        <DropdownItem 
          tag={Link} to="/signin">
            Signin
        </DropdownItem>
        );
    }
  }   

  renderSignup = () => {
    if(!this.props.authenticated){
      return(
        <DropdownItem 
          tag={Link} to="/signup">
            Signup
        </DropdownItem>
        );
    }
  }

  renderProtectedPage = () => {
    if(!this.props.authenticated){
      return(
        <NavLink 
        tag={Link} to="/test-protected">
            Protected Page
        </NavLink>
        );
    }
  }
  
  renderCreateTransferCustomerPage = () => {
    if(this.props.authenticated){
      return(
        <DropdownItem
          tag={Link} to="/create-transfer-customer">
            Create Transfer Customer
        </DropdownItem>
        );
    }
  }

  renderTransferAccountInfo = () => {
    if(this.props.authenticated){
      return(
        <DropdownItem
        tag={Link} to="/transfer-account-info">
            Transfer Account Info
        </DropdownItem>
        );
    }
  }

  renderTransferSource = () => {
    if(this.props.authenticated){
      return(
        <DropdownItem
          tag={Link} to="/transfer-source">
            Create Transfer Account
        </DropdownItem>
        );
    }
  }
  
  
   render() {
    
      return (
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Project Cabo</NavbarBrand>
          <Nav className="ml-auto" navbar>
            {this.renderProtectedPage()}
            <NavLink>Link</NavLink>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  {this.renderSignout()}
                  {this.renderSignin()}
                  {this.renderSignup()}
                  {this.renderTransferAccountInfo()}
                  {this.renderTransferSource()}
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
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



 