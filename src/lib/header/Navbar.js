import React, { PropTypes } from 'react';

const propTypes = {
  controlbarIcon: PropTypes.node,
  children: PropTypes.node,
};

const defaultProps = {
  controlbarIcon: 'fa fa-gears',
};

function Navbar({ controlbarIcon, children }) {
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
            <a data-toggle="control-sidebar" style={{ cursor: 'pointer' }}>
              <i className={controlbarIcon}></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;
