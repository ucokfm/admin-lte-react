import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.node,
};

export default function MiniLogo({ children }) {
  return (
    <span className="logo-mini">
      {children}
    </span>
  );
}

MiniLogo.propTypes = propTypes;
