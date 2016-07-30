import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.node,
};

function ControlbarWrapper({ children }) {
  return (
    <aside className="control-sidebar control-sidebar-dark">
      {children}
    </aside>
  );
}

ControlbarWrapper.propTypes = propTypes;

export default ControlbarWrapper;
