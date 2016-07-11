import React, { PropTypes } from 'react';

const propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default function Logo({ onClick, children }) {
  return (
    <a className="logo" style={{ cursor: 'pointer' }} onClick={onClick}>
      {children}
    </a>
  );
}

Logo.propTypes = propTypes;
