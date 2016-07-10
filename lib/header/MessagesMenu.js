import React, { PropTypes } from 'react';

import MessagesMenuItem from './MessagesMenuItem';

const propTypes = {
  messages: PropTypes.array,
};

export default function MessagesMenu({ messages = [] }) {
  const count = messages.length;
  return (
    <li className="dropdown messages-menu">
      <a href="" className="dropdown-toggle" data-toggle="dropdown">
        <i className="fa fa-envelope-o"></i>
        <span className="label label-success">{count}</span>
      </a>
      <ul className="dropdown-menu">
        <li className="header">You have {count} messages</li>
        <li>
          <ul className="menu">
            {messages.map(message =>
              <MessagesMenuItem
                {...message}
              >
                {message.text}
              </MessagesMenuItem>
            )}
          </ul>
        </li>
        <li className="footer"><a href="">See All Messages</a></li>
      </ul>
    </li>
  );
}

MessagesMenu.propTypes = propTypes;
