import React from 'react';

import MainNav from './main-nav';
import AuthNav from './authentication/auth-nav';

const NavBar = () => {
  return (
    <div>
      <nav>
        <div
          style={{
            display: 'flex',
            width: '100%',
            alignContent: 'flex-end',
          }}
        >
          <MainNav />
          <AuthNav />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
