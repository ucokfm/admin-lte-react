import React, { PropTypes } from 'react';

const propTypes = {
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  children: PropTypes.node,
};

const defaultProps = {
  icon: 'fa fa-users',
  iconColor: 'aqua',
};

export default function NotificationsMenuItem({ icon, iconColor, children }) {
  return (
    <li>
      <a href="">
        <i className={`${icon} text-${iconColor}`}></i> {children}
      </a>
    </li>
  );
}

NotificationsMenuItem.propTypes = propTypes;
NotificationsMenuItem.defaultProps = defaultProps;
