import React, { PropTypes } from 'react';

import MessagesMenuItem from './MessagesMenuItem';

const propTypes = {
  items: PropTypes.array,
  onItemClick: PropTypes.func,
  onFooterClick: PropTypes.func,
};

const defaultProps = {
  items: [],
};

function MessagesMenu({ items, onItemClick, onFooterClick }) {
  const count = items.length;
  return (
    <li className="dropdown messages-menu">
      <a
        className="dropdown-toggle"
        data-toggle="dropdown"
        style={{ cursor: 'pointer' }}
      >
        <i className="fa fa-envelope-o"></i>
        <span className="label label-success">{count}</span>
      </a>
      <ul className="dropdown-menu">
        <li className="header">You have {count} messages</li>
        <li>
          <ul className="menu">
            {items.map(item =>
              <MessagesMenuItem
                {...item}
                onClick={() => onItemClick(item)}
              >
                {item.text}
              </MessagesMenuItem>
            )}
          </ul>
        </li>
        <li className="footer">
          <a style={{ cursor: 'pointer' }} onClick={onFooterClick}>
            See All Messages
          </a>
        </li>
      </ul>
    </li>
  );
}

MessagesMenu.propTypes = propTypes;
MessagesMenu.defaultProps = defaultProps;

export default MessagesMenu;
