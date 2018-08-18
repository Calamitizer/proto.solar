import * as React from 'react';
import { Link } from 'react-router-dom';
import 'ps/Header/header.scss';

export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => (
  <header className="header">
    <div className="header-left">
      <div className="header-logo">
        <span>p.s</span>
      </div>
    </div>
    <nav className="header-center">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/works">Works</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>

    <div className="header-right" />
  </header>
);

export default Header;
