import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.node,
};

export default function FooterWrapper({ children }) {
  return (
    <footer className="main-footer">
      {children}
    </footer>
  );
}

FooterWrapper.propTypes = propTypes;
