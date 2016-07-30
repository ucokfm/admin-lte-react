import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

function Logo({ children, onClick }) {
  return (
    <a className="logo" style={{ cursor: 'pointer' }} onClick={onClick}>
      {children}
    </a>
  );
}

Logo.propTypes = propTypes;

export default Logo;
