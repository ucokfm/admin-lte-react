import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.node,
};

export default function LargeLogo({ children }) {
  return (
    <span className="logo-lg">
      {children}
    </span>
  );
}

LargeLogo.propTypes = propTypes;
