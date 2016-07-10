import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.node,
};

export default function PageWrapper({ children }) {
  return (
    <div className="content-wrapper">
      {children}
    </div>
  );
}

PageWrapper.propTypes = propTypes;
