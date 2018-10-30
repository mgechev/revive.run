import React from 'react';
import { Link } from 'gatsby';

import './styles.css';

const Header = () => (
  <div className="header">
    <div
      style={{
        margin: '0 auto',
        maxWidth: '90%',
        padding: '1.45rem 1.0875rem'
      }}
    >
      <nav>
        <img className="revive-logo" src={require('../../../static/images/logo.png')} alt="Revive Logo" />
        <Link to="/">Home</Link>
        <Link to="/docs">Docs</Link>
      </nav>
    </div>
  </div>
);

export default Header;
