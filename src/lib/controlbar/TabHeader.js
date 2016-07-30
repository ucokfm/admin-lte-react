import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.node,
};

function TabHeader({ children }) {
  return (
    <ul className="nav nav-tabs nav-justified control-sidebar-tabs">
      {children}
    </ul>
  );
}

TabHeader.propTypes = propTypes;

export default TabHeader;
