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
          <Link className="header-button" to="/">
            home
          </Link>
        </li>
        <li>
          <Link className="header-button" to="/about">
            about
          </Link>
        </li>
        <li>
          <Link className="header-button" to="/works">
            works
          </Link>
        </li>
        <li>
          <Link className="header-button" to="/contact">
            contact
          </Link>
        </li>
      </ul>
    </nav>

    <div className="header-right" />
  </header>
);

export default Header;
