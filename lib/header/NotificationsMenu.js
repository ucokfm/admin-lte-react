import React, { PropTypes } from 'react';

import NotificationsMenuItem from './NotificationsMenuItem';

const propTypes = {
  notifications: PropTypes.array,
};

export default function NotificationsMenu({ notifications = [] }) {
  const count = notifications.length;
  return (
    <li className="dropdown notifications-menu">
      <a href="" className="dropdown-toggle" data-toggle="dropdown">
        <i className="fa fa-bell-o"></i>
        <span className="label label-warning">{count}</span>
      </a>
      <ul className="dropdown-menu">
        <li className="header">You have {count} notifications</li>
        <li>
          <ul className="menu">
            {notifications.map(notification =>
              <NotificationsMenuItem
                {...notification}
              >
                {notification.text}
              </NotificationsMenuItem>
            )}
          </ul>
        </li>
        <li className="footer"><a href="">View all</a></li>
      </ul>
    </li>
  );
}

NotificationsMenu.propTypes = propTypes;
