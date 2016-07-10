import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.node,
};

export default function UserMenuFooter({ children }) {
  return (
    <li className="user-footer">
      {children}
    </li>
  );
}

UserMenuFooter.propTypes = propTypes;
