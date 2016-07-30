import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.node,
};

function SidebarMenuWrapper({ children }) {
  return (
    <ul className="sidebar-menu">
      {children}
    </ul>
  );
}

SidebarMenuWrapper.propTypes = propTypes;

export default SidebarMenuWrapper;
