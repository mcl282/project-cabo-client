import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderLinks() {
    if (false) {
      return (
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Link somewhere
          </Link>
        </li>
      )
    } else {
      return [
      <li className="nav-item" key={1}> 
        <Link className="nav-link" to="/">
          Another link somewhere
        </Link>        
      </li>,
      <li className="nav-item" key={2}> 
        <Link className="nav-link" to="/">
          Link somewhere else
        </Link>        
      </li>
      ]
    }
  }
  render() {
    return(
      <div>
        <Link to="/" className="navbar-brand">Project Cabo</Link>
        {this.renderLinks()}
      </div>
    )
  }
}

export default Header;