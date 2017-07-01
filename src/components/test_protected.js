import React from 'react';
import { Link } from 'react-router-dom';

const TestProtectedComponent = () => {
  return (
    <div>
      <p>This test component is working - PROTECTED</p>
      <Link className="nav-link" to="/signout">Sign out</Link>
    </div>
    )
}

export default TestProtectedComponent;


