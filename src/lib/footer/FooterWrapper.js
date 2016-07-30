import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.node,
};

function FooterWrapper({ children }) {
  return (
    <footer className="main-footer">
      {children}
    </footer>
  );
}

FooterWrapper.propTypes = propTypes;

export default FooterWrapper;
