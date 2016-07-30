import React, { PropTypes } from 'react';

const propTypes = {
  title: PropTypes.string,
};

function SidebarMenuHeader({ title }) {
  return <li className="header">{title}</li>;
}

SidebarMenuHeader.propTypes = propTypes;

export default SidebarMenuHeader;
