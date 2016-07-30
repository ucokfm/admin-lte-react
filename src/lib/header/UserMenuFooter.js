import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.node,
};

function UserMenuFooter({ children }) {
  return (
    <li className="user-footer">
      {children}
    </li>
  );
}

UserMenuFooter.propTypes = propTypes;

export default UserMenuFooter;
