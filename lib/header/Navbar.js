import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.node,
};

export default function Navbar({ children }) {
  return (
    <nav className="navbar navbar-static-top" role="navigation">
      <a
        className="sidebar-toggle"
        data-toggle="offcanvas"
        role="button"
        style={{ cursor: 'pointer' }}
      >
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </a>
      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
          {children}
          <li>
            <a href="" data-toggle="control-sidebar">
              <i className="fa fa-gears"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Navbar.propTypes = propTypes;
