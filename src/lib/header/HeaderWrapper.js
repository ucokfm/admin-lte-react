import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.node,
};

function HeaderWrapper({ children }) {
  return (
    <header className="main-header">
      {children}
    </header>
  );
}

HeaderWrapper.propTypes = propTypes;

export default HeaderWrapper;
