import React from 'react';
import { Link } from 'gatsby';
import { IdentityContextProvider } from 'react-netlify-identity-widget';

import './layout.css';

const Layout = ({ children }) => (
  <IdentityContextProvider url="https://authenticate-jamstack.netlify.app">
    <header to="/">
      {' '}
      <Link to="/">Jamstack App</Link>{' '}
    </header>
    <main>{children}</main>
  </IdentityContextProvider>
);

export default Layout;
