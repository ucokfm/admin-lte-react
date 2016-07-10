import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.node,
};

export default function HeaderWrapper({ children }) {
  return (
    <header className="main-header">
      {children}
    </header>
  );
}

HeaderWrapper.propTypes = propTypes;
