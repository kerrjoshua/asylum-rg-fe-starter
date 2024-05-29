import { Link } from 'react-router-dom';
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function MainNav() {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      <Link to="/">Home</Link>
      {isAuthenticated ? <Link to="/profile">Profile</Link> : <span></span>}
      <Link to="/graphs">The Data</Link>
    </div>
  );
}

export default MainNav;
