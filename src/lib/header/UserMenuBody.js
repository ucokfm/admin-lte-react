import React, { PropTypes } from 'react';

const propTypes = {
  children: PropTypes.node,
};

export default function UserMenuBody({ children }) {
  return (
    <li className="user-body">
      <div className="row">
        {children}
      </div>
    </li>
  );
}

UserMenuBody.propTypes = propTypes;
