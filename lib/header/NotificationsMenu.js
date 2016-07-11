import React, { PropTypes } from 'react';

import NotificationsMenuItem from './NotificationsMenuItem';

const propTypes = {
  items: PropTypes.array,
  onItemClick: PropTypes.func,
  onFooterClick: PropTypes.func,
};

const defaultProps = {
  items: [],
};

function NotificationsMenu({ items, onItemClick, onFooterClick }) {
  const count = items.length;
  return (
    <li className="dropdown notifications-menu">
      <a
        className="dropdown-toggle"
        data-toggle="dropdown"
        style={{ cursor: 'pointer' }}
      >
        <i className="fa fa-bell-o"></i>
        <span className="label label-warning">{count}</span>
      </a>
      <ul className="dropdown-menu">
        <li className="header">You have {count} notifications</li>
        <li>
          <ul className="menu">
            {items.map(item =>
              <NotificationsMenuItem
                {...item}
                onClick={() => onItemClick(item)}
              >
                {item.text}
              </NotificationsMenuItem>
            )}
          </ul>
        </li>
        <li className="footer">
          <a style={{ cursor: 'pointer' }} onClick={onFooterClick}>
            View all
          </a>
        </li>
      </ul>
    </li>
  );
}

NotificationsMenu.propTypes = propTypes;
NotificationsMenu.defaultProps = defaultProps;

export default NotificationsMenu;
