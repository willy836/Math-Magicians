import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <nav>
      <h1>Math Magicians</h1>
      <div className="links">
        <Link to="/" style={{ color: 'blue', fontSize: 18 }}>
          Home
        </Link>
        |
        <Link to="/Calculator" style={{ color: 'blue', fontSize: 18 }}>
          Calculator
        </Link>
        |
        <Link to="/Quote" style={{ color: 'blue', fontSize: 18 }}>
          Quote
        </Link>
      </div>
    </nav>
  </div>
);

export default Header;
