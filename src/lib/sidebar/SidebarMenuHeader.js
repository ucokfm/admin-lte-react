import React, { PropTypes } from 'react';

const propTypes = {
  title: PropTypes.string,
};

export default function SidebarMenuHeader({ title }) {
  return <li className="header">{title}</li>;
}

SidebarMenuHeader.propTypes = propTypes;
