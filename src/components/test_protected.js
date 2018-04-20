import React from 'react';
import { Link } from 'react-router-dom';
import DropZone from '../components/uploaders/dropzone_component'

const TestProtectedComponent = () => {
  return (
    <div className="container-fluid">
      <p>This test component is working - PROTECTED</p>
        <DropZone/>        
      <Link className="nav-link" to="/signout">Sign out</Link>
    </div>
    )
}

export default TestProtectedComponent;





