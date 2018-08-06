import * as React from 'react';
import { Link } from 'react-router-dom';

export interface HeaderProps { }

const Header: React.SFC<HeaderProps> = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/works">Works</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
